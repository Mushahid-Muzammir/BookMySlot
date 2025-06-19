import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAvailableSlots, getCourtImagesById } from "../services/courtService";
import type { CourtImage } from "../dataType";
import type { AvailableSlots } from "../dataType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/swiper-bundle.css";

const SelectDate = () => {

  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState(0);
  const [slots, setSlots] = useState<AvailableSlots[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlots>()
  const [images, setImages] = useState<CourtImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const courtId = parseInt(searchParams.get("courtId") || "0", 10);

  const fetchAvailableSlots = async () => {
    try{
      const res = await getAvailableSlots(courtId, date, duration);
      setSlots(res);
      console.log("Results", res);
    }catch(error){
        console.error("Error fetching slots:", error);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await getCourtImagesById(courtId);
        setImages(res);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

  }, [date, courtId, duration]);

  return (
    <div className="max-w-full mx-auto">
      <div className="flex items-center mb-6">
        {loading ? (
          <p>Loading images...</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]}
            loop
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
        <div className="flex flex-wrap gap-6 mb-6 items-end">
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
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
              onClick={() => fetchAvailableSlots()}>
              Search
            </button>
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
                      ? "hover:bg-blue-600 hover:text-white cursor-pointer "
                      : "border border-gray-300 hover:bg-gray-200 cursor-not-allowed"
                  } ${isSelected ? "text-white bg-blue-600" : "bg-white border border-gray-600 text-black"}`}
                >
                  {slot.startTime} - {slot.endTime}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center py-6">
          <button className="py-3 px-6 rounded-[15px] text-white bg-blue-600 cursor-pointer">Confirm Booking</button>
        </div>

      </div>
    </div>
  );
};

export default SelectDate;
