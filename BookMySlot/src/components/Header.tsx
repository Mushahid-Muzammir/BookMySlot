import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { useUser } from "../context/UserContext";


const Header = () => {
  const {user} = useUser();


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
    <div className="w-full py-3 px-8 top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
        <div className="text-2xl font-bold text-[#22577E]">
          <span>BookMySlot</span>
        </div>

        <div className="flex items-center gap-8">
          {["Home", "About Us", "Contact", "Shop", "My Bookings"].map((link, idx) => (
            <a
              key={idx}
              className="text-[15px] font-semibold text-[#111317] hover:text-[#22577E] transition duration-200 cursor-pointer"
            >
              {link}
            </a>
          ))}
          {/* {user && (
            <div>
              <span className="text-[15px] font-semibold text-[#111317]">
                Welcome
              </span>
              <p>{user.name}</p>
            </div>
          )} */}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-12 py-2 border border-[#22577E] text-[#111317] font-semibold  hover:bg-[#22577E] hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-[#22577E] text-white font-semibold rounded-full hover:bg-[#1d4c63] transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>

  )
}

export default Header