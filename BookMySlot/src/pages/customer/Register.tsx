import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { register } from "../../services/authService";
import registerPic from "../../assets/register.jpg"

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const navigate = useNavigate();
const handleRegister = async (e: React.FormEvent) => {
  e.preventDefault();
  try{
    const token = await register(name, email, password);
    localStorage.setItem("token", token);
    setError(""); // Clear any previous error messages
    toast.success("Registration successful! Now Please Login.", {
      duration: 1500,
    });
    navigate("/login");

      }catch (error : any) {
    setError(error.response?.data?.message);
    toast.error("Registration failed. Please try again.");
  }
};

  return (
      <div className="w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="flex gap-4 bg-white">
          <div className="flex-1/2 flex items-center justify-center">
            <img
              src={registerPic}
              className="w-full object-fit" 
              alt=""
            />
          </div>
          <div className="flex-1/3 flex flex-col justify-center p-8">
            <h1 className="text-[25px] font-semibold text-black mb-8 text-center">Create Your Account</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-3">       
              <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Name"
                      className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                    />
              <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required                    
                      placeholder="Email"
                      className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                    />
              <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                      className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    {error && <p className="text-red-500">{error}</p>}

              <button               
                className="w-[80%] h-[50px] rounded-[30px] text-[20px] font-semibold text-white bg-blue-500 hover:bg-blue-600 transition duration-300 mt-4 mx-auto">
                Sign Up
              </button>
            </form>

            <div className="mx-6 text-sm mt-3 items-center text-center">
              <span>Already have an account?</span>
              <a onClick={() => navigate("/login")} className="mx-2 text-blue-500 cursor-pointer">Sign In</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register