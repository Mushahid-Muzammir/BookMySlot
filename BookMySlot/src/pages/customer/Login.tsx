import React, { useState } from "react";
import { toast } from "sonner";
import { login } from "../../services/authService"; 
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

type LoginProps = {
  onLoginSuccess: () => void;
}
const Login = ({onLoginSuccess} : LoginProps) => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMsg, setErrorMsg] = useState("");
const { setUser } = useUser();

const navigate = useNavigate();

const  handleLogin = async (e : React.FormEvent) => {
  e.preventDefault();
  try{
    const response = await login(email, password);
    setUser(response)
    console.log("Login response:", response);
    localStorage.setItem("isLoggedIn", "true");
    setErrorMsg(""); 
    toast.success("Login successful!", {
      duration: 3000,
    });  
    onLoginSuccess();
  setTimeout(() => { navigate("/home") }, 1500); 

  }catch (error : any) {
    setErrorMsg(error.response?.data?.message || "Login failed. Please try again.");
    toast.error("Login failed. Please check your credentials.");
  }
}; 

  return (
    <div className="w-[50%] min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-md overflow-hidden">
    
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Connect with us to make your indoor bookings!
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-6 ">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-6 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                className="py-3 px-8 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
                Login
              </button>
            </div>
          </form>

          <p className="text-red-500 text-center text-sm mt-2">
            {errorMsg}
          </p>

          <div className="text-center my-4 text-gray-400 text-xs">— or —</div>

         <div className="flex items-center justify-center gap-4">
           <button className="flex items-center justify-center gap-3 px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
            <img src="/images/google.svg" className="w-6 h-6" alt="Google" />
            <span className="text-sm font-medium text-gray-700">
              Sign in with Google
            </span>
          </button>
         </div>

          <div className="text-center mt-6 text-sm">
            <span className="text-gray-600">Don't have an account?</span>
            <a onClick={() => navigate("/register")} className="text-blue-500 ml-1 hover:underline cursor-pointer">
              Register
            </a>
          </div>
        </div>

        {/* Image Section */}
        {/* <div className="hidden md:flex md:flex-1 items-center justify-center bg-gray-100 p-4">
          <img
            src="/images/loginPic.jpg"
            className="rounded-2xl max-h-[500px] object-cover"
            alt="Stadium Booking"
          />
        </div> */}
    </div>
  </div>


  )
}

export default Login