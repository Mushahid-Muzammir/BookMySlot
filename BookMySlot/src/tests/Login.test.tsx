import { describe, it, expect } from "vitest";
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Login from "../pages/customer/Login";
import { UserProvider } from "../context/UserContext";
import { MemoryRouter } from "react-router-dom";//React Router hooks like useNavigate() need a <Router> higher in the component tree to work properly. MemoryRouter simulates this environment in tests without needing a full browser-like environment.


describe("Login Component",() => {
    const renderLogin = () => {
        render(
           <MemoryRouter>
                <UserProvider>
                    <Login />
                </UserProvider>
        </MemoryRouter>
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

    
})