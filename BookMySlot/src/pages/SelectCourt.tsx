import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Court } from "../dataType";
import courtsImage from "../assets/football2.jpg";
import { getCourts } from "../services/courtService";
import Select from "react-select";

const SelectCourt = () => {
    const [courts, setCourts] = useState<Court[]>([]);

    useEffect(() => {
           getCourts()
           .then(setCourts)
           .catch((error) => {
               console.error("Error fetching courts:", error);
           });
       }, []);

    const options = [
    { value: 'daily', label: 'Daily' },
    { value: 'month', label: 'Current' },
    { value: 'last+month', label: 'Last Month' },
    { value: 'year', label: 'Current Year' },
    ];

    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    }


  return (
    <div className="w-full h-auto min-h-screen">
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 px-6">

                <div className="relative w-full px-6"> 
                    <div className="flex flex-row gap-2 mt-2 mb-6">
                        <Select className='w-40' placeholder='Location' options={options}/>
                        <Select className='w-40' placeholder='Price/hr' options={options}/>
                        <Select className='w-40' placeholder='Rating' options={options}/>
                    </div>  
                    <div className="w-full flex justify-center mb-6">
                        <input className="w-3/5 h-10 rounded-lg bg-white border border-gray-300 px-6 outline-none shadow-sm focus:border-blue-500 transition-all"
                            placeholder="Search for a court..."/>
                    </div>

                    <div className="w-full py-4 px-6">
                        <p className="text-xl font-semibold text-[#22577E] mb-4">
                            🔥Popular Courts Available
                        </p>
                        <hr className="w-3/4 border-b border-gray-300 mb-4" />
                     <div className="w-full overflow-x-auto py-4">
                        <div className="flex flex-row gap-6 min-w-max">
                            {courts.map((court, index) => (
                            <div 
                                key={index}
                                className="flex flex-col bg-white border border-gray-300 rounded-lg p-3 shadow-md transition-all hover:shadow-lg hover:scale-105 w-[250px] flex-shrink-0"
                            >
                                <img src={courtsImage} alt="Court" className="w-full h-28 object-cover border border-gray-200 rounded" />
                                <p className="text-md font-semibold text-black mt-2">{court.name}</p>
                                <p className="text-sm text-gray-600 mt-1">🪧{court.location}</p>
                                <p className="text-md font-semibold text-black mt-1">💰 Rs. {court.price} /hr</p>
                                <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
                                Select Court
                                </button>
                            </div>
                            ))}
                        </div>
                    </div>



                        <p className="text-xl font-semibold text-[#22577E] mt-6 mb-2">
                            Checkout These Courts
                        </p>
                        <hr className="w-3/4 border-b border-gray-300 mb-8" />
                        <div className="flex flex-col gap-8 w-max px-4">
                            {courts.map((court, index) => (
                            <div
                                key={index}
                                className="flex flex-around justify-between w-full h-[120px] bg-white border border-gray-300 rounded-lg shadow-md transition-all hover:shadow-lg hover:scale-105">
                                <img
                                src={courtsImage}
                                alt={court.name}
                                className="w-1/4 h-full object-cover rounded-l-lg"
                                />

                                <div className="flex flex-col justify-between p-2 w-full">
                                    <div className="flex flex-row justify-between items-start">
                                        <div className="flex flex-col">
                                            <p className="text-md font-semibold text-black">{court.name}</p>
                                            <p className="text-sm text-gray-600 mt-1">📍{court.location}</p>
                                        </div>

                                        <p className="text-md font-semibold text-black whitespace-nowrap">Rs. {court.price} /hr</p>
                                        </div>

                                    <hr className="my-1"/>
                                    <div className="flex flex-end justify-end">
                                        <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition"
                                        onClick={() => handleNavigation("/selectDate")}>
                                            Select Court
                                        </button>
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