import type React from "react"
import type { Court } from "../dataType";
import { useNavigate } from "react-router-dom";
import courtsImage from "../assets/football2.jpg";

type CourtsCardProps = {
    court : Court
    sportId: number;
}

const CourtsCard : React.FC<CourtsCardProps> = ({court, sportId}) => {
    const navigate = useNavigate();
  return (
    <div className="border-b border-[#c6c6c6] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 p-1">
        <img
        src={courtsImage}
        alt={court.name}
        className="w-full h-52 rounded-lg object-cover"
        />

        <div className="flex flex-col justify-between p-4">
            <h3 className="text-lg font-semibold text-[#272727]">{court.name}</h3>
        <div className="flex items-center gap-2">
            <p className="text-[#272727] text-sm">{court.location}</p>
        </div>
        <div className="flex justify-between pt-2">
            <p className="text-lg text-[#272727] font-bold mt-2">
            Rs. {court.price}
            </p>
            <button 
            onClick={ () =>
            navigate(`/selectDate?courtId=${court.courtId}`, {
            state: { sportId: sportId, courtPrice: court.price },
                })
            }
            className="bg-[#50D890] font-medium text-white px-12 py-2 rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300 cursor-pointer">
                Select
            </button>
        </div>
        </div>
    </div>
  )
}

export default CourtsCard