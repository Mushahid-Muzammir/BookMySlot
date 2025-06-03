import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";


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
    navigate("/login");
  }catch (error : any) {
    setError(error.response?.data?.message);
  }
};

  return (
      <div className="w-full h-[720px] flex items-center justify-center bg-[#f3f3f3]">
        <div className="flex flex-row w-[60%] h-[80%] rounded-[20px] bg-white border border-[#cfcfcf] p-6">
          <div className="flex-1 flex items-center justify-center">
            <img
              src="images/loginPic.jpg"
              className="w-full h-[95%] max-w-[350px] rounded-[20px]"
              alt="Salon Welcome Image"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-[25px] font-bold text-black text-center">Join with us!</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-3">       
              <label>Name</label>
              <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-6 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                    />
              <label>Email</label>
              <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required                    
                      placeholder="you@example.com"
                      className="w-full px-6 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                    />
              <label>Password</label>
              <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full px-6 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
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