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
    <div
        onClick={() =>
        navigate(`/selectDate?courtId=${court.courtId}`, {
            state: { sportId: sportId, courtPrice: court.price },
        })
        }
        className="bg-[#000111] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <img
        src={courtsImage}
        alt={court.name}
        className="w-full h-48 object-cover"
        />

        <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-semibold text-white">{court.name}</h3>
        <div className="flex items-center gap-2">
            {/* <img src="/assets/location.svg" alt="icon" className="w-5 h-5" /> */}
            <p className="text-blue-400 text-sm">{court.location}</p>
        </div>
        <div className="pt-2">
            <p className="text-white font-semibold mt-2">
            Rs. {court.price} /hr
            </p>
        </div>
        </div>
    </div>
  )
}

export default CourtsCard