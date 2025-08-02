import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
// import { useUser } from "../context/UserContext";


const Header = () => {
  // const {user} = useUser();


  const navigate = useNavigate();
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  const handleLogout = () => {
    toast("Are you sure you want to logout?",{
      action:{
        label: "Logout",
        onClick: () => {
          localStorage.removeItem("token");
          localStorage.removeItem("isLoggedIn");
          navigate("/");
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
    <div className="w-full py-5 px-8 top-0 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-around">
        
        <div className="text-2xl font-semibold text-[#272727]">
          <span><span className="text-3xl font-bold">BOOK</span>MYSLOT</span>
        </div>

        <div className="flex items-center gap-12">
          {["HOME", "SHOP NOW", "BOOKINGS"].map((link, idx) => (
            <a
              key={idx}
              className="text-[19px] font-regular text-[#272727] hover:text-[#22577E] transition duration-200 cursor-pointer"
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
              className="px-12 py-4 bg-[#4F98CA] text-white font-medium hover:bg-[#22577E] hover:text-white transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-12 py-4 bg-[#4F98CA] text-white font-medium hover:bg-[#22577E] hover:text-white transition"
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