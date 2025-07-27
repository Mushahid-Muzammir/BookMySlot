import { describe, it, expect , vi} from "vitest";
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from "../pages/customer/Login";
import { UserProvider } from "../context/UserContext";
import { BrowserRouter } from "react-router-dom";//React Router hooks like useNavigate() need a <Router> higher in the component tree to work properly. MemoryRouter simulates this environment in tests without needing a full browser-like environment.
import { login } from "../services/authService";


vi.mock("../services/authService", () => (
    {
        login : vi.fn()
    }
));

//Without mocking the whole react-router-dom, we can partially mock only the useNavigate hook to control its behavior in tests.
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Login Component",() => {
    const renderLogin = () => {
        render(
           <BrowserRouter>
                <UserProvider>
                    <Login />
                </UserProvider>
            </BrowserRouter>
        )
    }
    it('Display Show input as email', () => {
        renderLogin();
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();       
    });

    it('Update input values when user types', () => {
        renderLogin();
        const emailInput = screen.getByPlaceholderText(/email/i);
        const passwordInput = screen.getByPlaceholderText(/password/i);
        fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
        fireEvent.change(passwordInput, { target: { value: "test@gmail.com" } });

        expect(emailInput).toHaveValue("test@gmail.com");
        expect(passwordInput).toHaveValue("test@gmail.com");
        
    });

    it('login service called with correct input values', async () => {
        const mockUser = { userId : 1, email : 'test@gmail.com' };
        (login as any).mockResolvedValueOnce(mockUser);
        renderLogin();

        fireEvent.change(screen.getByPlaceholderText(/email/i), { target : { value : 'test@gmail.com' }});
        fireEvent.change(screen.getByPlaceholderText(/password/i), { target : { value : '1234567' }});
        fireEvent.click(screen.getByRole("button", { name : /login/i }));

        await waitFor( () => {
            expect(login).toHaveBeenCalledWith('test@gmail.com', '1234567');
            expect(mockNavigate).toHaveBeenCalledWith('/home');
        }) 
        
    })

   


})