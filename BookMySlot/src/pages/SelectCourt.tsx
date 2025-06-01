import courts from "../data/courts.json";
import courtsImage from "../assets/football2.jpg";
import { useNavigate } from "react-router-dom";

const SelectCourt = () => {

    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    }

  return (
    <div className="w-full h-auto min-h-screen">
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-6">
                <div className="w-full py-5">
                    <p className="text-2xl text-center font-bold text-[#22577E]">
                    Select Your Preferred Court
                    </p>
                </div>

                <div className="relative w-full px-6">   
                    <div className="w-full flex justify-center mb-6">
                        <input className="w-3/5 h-10 rounded-lg bg-white border border-gray-300 px-6 outline-none shadow-sm focus:border-blue-500 transition-all"
                            placeholder="Search for a court..."/>
                    </div>

                    <div className="w-full py-4">
                        <div className="flex flex-col gap-6 w-max px-4">
                            {courts.map((court, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between w-full h-[100px] bg-white border border-gray-300 rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
                                <img
                                src={courtsImage}
                                alt={court.court_name}
                                className="w-1/4 h-full object-cover rounded-l-lg"
                                />

                                <div className="flex flex-col justify-between p-2 w-full">
                                    <div>
                                        <div className="flex flex-row justify-between items-center">
                                        <p className="text-md font-semibold text-black">{court.court_name}</p>
                                        <p className="text-sm font-medium text-black">Rs. {court.price} /hr</p>
                                        </div>
                                        <hr className="my-1"/>
                                        <div className="flex flex-row justify-between items-center">
                                        <p className="w-2/3 text-sm text-gray-600 mt-1">{court.description}</p>
                                        <button type="button"
                                        onClick={() => handleNavigation("/selectDate")}
                                        className="px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition">
                                        Select Court
                                        </button>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectCourt