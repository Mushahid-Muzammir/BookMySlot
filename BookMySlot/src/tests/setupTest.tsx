import { vi } from 'vitest';
import type { Mock } from 'vitest';//type of mock function
import '@testing-library/jest-dom';// To use use like toBeInTheDocument (DOM assertions and predictions)

//Without mocking the whole react-router-dom, we can partially mock only the useNavigate hook to control its behavior in tests.
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(//Import all actual module to use its types
    "react-router-dom"
  );

  return {
    ...actual, //Return all actual exports except useNavigate then Override useNavigate to return our mock function
    useNavigate: () => mockNavigate,
  };
});


declare global {
  var mockNavigate: Mock; //We declare as a global function and Assigned type Mock to mockNavigate to use it in other test files
}

globalThis.mockNavigate = mockNavigate;

