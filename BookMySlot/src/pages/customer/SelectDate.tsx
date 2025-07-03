import { useState, useEffect } from "react";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { getAvailableSlots, getCourtImagesById, getCourtById } from "../../services/courtService";
import type { Court, CourtImage, AvailableSlots } from "../../dataType";
import { createBooking } from "../../services/bookingService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/swiper-bundle.css";
import { useUser } from "../../context/UserContext";

const SelectDate = () => {

  const [court, setCourt] = useState<Court>();
  const [courtPrice, setCourtPrice] = useState<number>();
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [slots, setSlots] = useState<AvailableSlots[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlots>();
  const [openPopup, setOpenPopup] = useState(false);
  const [images, setImages] = useState<CourtImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [successPopup, setSuccessPopup] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const {user} = useUser();

  const courtId = parseInt(searchParams.get("courtId") || "0", 10);
  const rate = location.state.courtPrice;
  const sportId = location.state.sportId;
  const userId = user?.userId || 0;


  const fetchAvailableSlots = async () => {
    try{
      const res = await getAvailableSlots(courtId, date, duration);
      setSlots(res);
    }catch(error){
        console.error("Error fetching slots:", error);
    }
  };

  const padToTwo = (n: number) => n.toString().padStart(2, '0');

  const getIsoTime = (timeStr: string): string => {
    const [hours, minutes] = timeStr.split(':');
    return `${padToTwo(+hours)}:${padToTwo(+minutes)}:00`;
  };


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await getCourtImagesById(courtId);
        setImages(res);
        const courtData = await getCourtById(courtId);
        setCourt(courtData);
        const totalPrice = rate*duration/60;
        setCourtPrice(totalPrice);
      } catch (error) {
        console.error("Error fetching Court details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();

  }, [date, courtId, duration]);

  const bookingData = {
    courtId: courtId,        
    userId: userId,
    sportId: sportId,
    date: date.toISOString().split("T")[0], 
    startTime: getIsoTime(selectedSlot?.startTime || "00:00"),      
    endTime: getIsoTime(selectedSlot?.endTime || "00:00")      
  };

  const confirmBooking = async () => {
    await createBooking(bookingData);
    setSuccessPopup(true);
    setOpenPopup(false);
    setSelectedSlot(undefined);
    setDate(new Date());

  }

  return (
    <div className="max-w-full mx-auto">
      <div className="flex items-center mb-6">
        {loading ? (
          <p>Loading images...</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable : true }}
            className="w-full h-72 shadow-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.imageUrl}
                  alt={`Court Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div  className="px-12">
        <h1 className="text-xl text-center font-semibold mb-2">{court?.name}</h1>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Pick a Date</label>
              <DatePicker
                selected={date}
                onChange={(d) => d && setDate(d)}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                className="border p-2 rounded-md w-[200px]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-semibold mb-2">Slot Duration (min)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="border p-2 rounded-md w-[200px]"
                min={60}
                max={240}
                step={30}
              />
            </div>

            <div className="flex items-end">
              <button
                className="px-10 py-2 bg-[#111317] cursor-pointer text-white rounded-lg font-medium hover:bg-black"
                onClick={() => fetchAvailableSlots()}>
                Search
              </button>
            </div>
          </div>
          <div>
            <p className="text-md font-semibold">Contact Us: 📞{court?.contactNumber}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Available Time Slots on {date.toDateString()}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {slots.map((slot, index) => {
              const isSelected = slot.startTime === selectedSlot?.startTime && slot.endTime === selectedSlot?.endTime;

              return (
                <button
                  key={index}
                  disabled={slot.status === "Booked"}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2 rounded-md text-md text-center font-medium transition duration-200 ${
                    slot.status === "Available"
                      ? "hover:bg-[#6C6A61] hover:text-white cursor-pointer "
                      : "bg-gray-200 cursor-not-allowed"
                  } ${isSelected ? "text-white bg-[#6C6A61]" : "bg-white border border-gray-600 text-black"}`}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center py-6">
          {/* {selectedSlot && ( */}
            <button className="py-3 px-8 rounded-lg text-white bg-[#111317] hover:bg-black cursor-pointer"
            onClick={() => setOpenPopup(true)}>
              Confirm Booking
            </button>
          {/* )} */}
        </div>
        {openPopup && (
           <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
              <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-center mb-4">Confirm Your Booking</h2>
        
              <div className="border p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <p className="font-semibold">📍 Court:</p>
                  <p className="text-black">{court?.name} </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">📅 Date:</p>
                  <p className="text-black">{date.toISOString().split("T")[0]} </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">⏰ Time Slot:</p>
                  <p className="text-black"> {selectedSlot?.startTime}  - {selectedSlot?.endTime} </p>
                </div>
          
                <div className="flex justify-between">
                  <p className="font-semibold">💰 Price:</p>
                  <p className="text-black">LKR {rate} /hr</p>
                </div>
                <hr/>
          
                <div className="flex justify-between text-lg font-semibold">
                  <p>Total</p>
                  <p>LKR {courtPrice}  </p>
                </div>
              </div>
        
              <div className="flex justify-between mt-4">
                <button onClick={() => setOpenPopup(false)} className="px-8 py-2 bg-[#6C6A61] text-white rounded-lg hover:bg-gray-500">Cancel</button>
                <button onClick={confirmBooking} className="px-8 py-2 bg-[#111317] text-white rounded-lg hover:bg-black">Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {successPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold text-center mb-4">Booking Confirmed!</h2>
            <p className="text-center">Your booking has been successfully confirmed.</p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => {
                  setSuccessPopup(false);
                  navigate("/home");
                }}
                className="px-8 py-2 bg-[#111317] text-white rounded-lg hover:bg-black"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )}


export default SelectDate
