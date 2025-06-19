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
  const [images, setImages] = useState<CourtImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const courtId = parseInt(searchParams.get("courtId") || "0", 10);

  const fetchAvailableSlots = async () => {
    try{
      // const formattedDate = date.toISOString().split("T")[0];
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

      <div  className="px-6">
        <div className="flex flex-wrap gap-6 mb-6 items-end">
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2">Pick a Date</label>
            <DatePicker
              selected={date}
              onChange={(d) => d && setDate(d)}
              dateFormat="yyyy-MM-dd"
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
          <h3 className="text-lg font-semibold mb-3">Available Time Slots</h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
            {slots.map((slot, index) => (
              <button
                key={index}
                disabled={slot.status === "Booked"}
                className={`p-3 rounded-md text-sm text-center font-medium transition ${
                  slot.status === "Available"
                    ? "bg-green-500 text-white hover:bg-green-400"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDate;
