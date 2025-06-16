import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

const Header = () => {

  const navigate = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  const handleLogout = () => {
    toast("Are you sure you want to logout?",{
      action:{
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          navigate("/login");
          toast.success("Logged out successfully!");
        }
      },
      cancel:{
        label: "Cancel",
        onClick: () => {
          toast("Logout cancelled");
        }
      }
    })
  }

  return (
      <div className="flex flex-row items-center justify-between w-full h-[70px] px-6 z-10 top-0 left-0">
        
        <div className="ml-[30px]">
          {/* <img src="assets/logo.png" alt="Logo" className="w-17 h-auto object-cover"/> */}
        </div>

        <div className="flex justify-end items-center space-x-10">
          <a className="text-sm font-semibold text-black hover:text-blue-800 cursor-pointer">HOME</a>
          <a className="text-sm font-semibold text-black hover:text-blue-800 cursor-pointer">ABOUT US</a>
          <a className="text-sm font-semibold text-black hover:text-blue-800 cursor-pointer">CONTACT</a>
          <a className="text-sm font-semibold text-black hover:text-blue-800 cursor-pointer">SHOP</a>
          <a className="text-sm font-semibold text-black hover:text-blue-800 cursor-pointer">MY BOOKINGS</a>

          <div className="flex items-center space-x-16">
          { isLoggedIn ?
              <a onClick={handleLogout} 
               className="text-sm font-bold mx-8 px-[53px] py-[12px] hover:bg-[#6482ad] border border-black cursor-pointer">
                  LogOut
              </a> 
              :
               <button onClick={() => navigate("/login")}  
              className="text-[15px] font-bold mx-8 px-[53px] py-[12px] text-white bg-[#22577E] rounded-[30px] cursor-pointer hover:bg-[#6482ad] transition duration-300">
                  Login
              </button>
              }

          </div>
        </div>
      </div>
  )
}

export default Header