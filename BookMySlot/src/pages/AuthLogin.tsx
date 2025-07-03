import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


export const AuthLogin = () => {

    const navigate = useNavigate();
    const handlelogin = () => {
 
      toast.success("Login successful! 🎉", {
        duration: 1000,
      });
      navigate("/home");
    }

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl w-full">   
        <div className="hidden md:block md:w-1/2 bg-gray-100">
          <img alt="Login Visual" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2 px-5">
          <h2 className="text-3xl font-bold text-black">Welcome Back!</h2>
          <h4 className="font-semibold text-gray-500 mb-6">To continue please enter your username and password </h4>
          
          <form className="space-y-8">
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none"
              />
            </div>

            <div className=''>
                
                <a 
                className='text-blue-600 hover:text-blue-700 text-sm font-semibold' 
                href=''>
                    Forgot Password?
                </a>

            </div>

            <button
              type="submit"
              className="w-1/2 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-medium font-semibold transition duration-200"
              onClick={handlelogin}
            >
              Login
            </button>
          </form>
        </div>
    </div>
  </div>

  ) 
}
