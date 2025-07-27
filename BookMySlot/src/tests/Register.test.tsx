import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Register from "../pages/customer/Register";
import { fireEvent, render, screen } from "@testing-library/react";
import { register } from "../services/authService";

vi.mock("../services/authService", () => (
    {
        register : vi.fn()
    }
));

describe("Register Component", () => {

    const renderRegister = () => {
        render(
        <BrowserRouter>
            <Register/>
        </BrowserRouter>        
    )
    }

    it("should contain a text as Create Account", () => {
        renderRegister();
        const createAccountText = document.querySelector("h1");
        expect(createAccountText).toHaveTextContent("Create Your Account");
    });

    it('Contain input fields', () => {
        renderRegister();
        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });

    it('Update when user inputs', () => {
        renderRegister();
        const nameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");
        fireEvent.change(nameInput, { target : { value  : "Mushahid"}});
        fireEvent.change(emailInput, { target : { value  : "Test@gmail.com"}});
        fireEvent.change(passwordInput, { target : { value  : "1234567"}});

        expect(nameInput).toHaveValue("Mushahid")
        expect(emailInput).toHaveValue("Test@gmail.com")
        expect(passwordInput).toHaveValue("1234567")
    })

     it('Should call register service and navigate to login page', () => {
        const mockUser = { name : "Mushahid", email : "test@gmail.com", password : "12345678"};
        (register as any).mockResolvedValueOnce(mockUser);
        renderRegister();

        fireEvent.change(screen.getByPlaceholderText("Name"), { target : {value : "Mushahid" }});
        fireEvent.change(screen.getByPlaceholderText("Email"), { target : {value : "test@gmail.com" }});
        fireEvent.change(screen.getByPlaceholderText("Password"), { target : {value : "1234567" }});

        
    })
});