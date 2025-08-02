import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { login } from "../services/authService"; 
import { useUser } from "../context/UserContext";

export const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const {setUser} = useUser();
  const navigate = useNavigate();

  const handlelogin = async (e : React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await login(email, password); 
      if(response.role === "admin"){
        setUser(response)
        console.log("User")
        localStorage.setItem("isLoggedIn", "true");
        setErrorMsg("");         
          toast.success("Login successful!", {
          duration: 3000,
        }); 
        navigate("/admin/dashboard");
      }else{
        toast.error("Invalid Credentials!, Please try again.");
      }
    }catch (error : any) {
      setErrorMsg(error.response?.data?.message || "Login failed. Please try again.");
      toast.error("Login failed. Please check your credentials.");
    }
  }; 

  return (   
    <div className="flex flex-col w-full bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="flex items-center justify-center min-h-screen bg-white px-4">
        <div className="flex-1 p-8 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-md text-gray-600 text-center mb-6">
              Best manage your indoor bookings with us!
            </p>

            <form onSubmit={handlelogin} className="flex flex-col gap-6 items-center">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username or Email"
                  className="w-full px-8 py-4  border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-8 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <button className="w-1/4 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
                Login
              </button>
            </form>

            <p className="text-red-500 text-center text-sm mt-2">
            {errorMsg}
          </p>
        </div>
    </div>
  </div>

  ) 
}
