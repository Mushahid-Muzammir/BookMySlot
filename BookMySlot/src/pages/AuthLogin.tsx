import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


export const AuthLogin = () => {

    const navigate = useNavigate();
    const handlelogin = () => {
 
      toast.success("Login successful! 🎉", {
        duration: 1000,
      });
      navigate("/admin/dashboard");
    }

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

            <form className="flex flex-col gap-6 items-center">
              <div>
                <input
                  type="email"
                  placeholder="Username or Email"
                  className="w-full px-8 py-4  border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-8 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <button onClick={handlelogin}
                className="w-1/4 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition">
                Login
              </button>
            </form>
        </div>
    </div>
  </div>

  ) 
}
