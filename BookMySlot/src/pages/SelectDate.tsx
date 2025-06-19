import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getCourtImagesById } from "../services/courtService";
import type { CourtImage } from "../dataType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/swiper-bundle.css";

const SelectDate = () => {

  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState<any[]>([]);
  const [images, setImages] = useState<CourtImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const courtId = parseInt(searchParams.get("courtId") || "0", 10);

  const fetchAvailableSlots = async (selectedDate: string) => {
    return {
      date: selectedDate,
      availableSlots: [
        { startTime: "08:00", endTime: "09:00", status: "available" },
        { startTime: "09:00", endTime: "10:00", status: "booked" },
        { startTime: "10:00", endTime: "11:00", status: "available" },
      ],
    };
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

    const formattedDate = date.toISOString().split("T")[0];
    fetchAvailableSlots(formattedDate).then((res) =>
      setSlots(res.availableSlots)
    );
  }, [date, courtId]);

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
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Pick a Date</h2>
          <DatePicker
            selected={date}
            onChange={(d) => d && setDate(d)}
            dateFormat="yyyy-MM-dd"
            className="border p-2 rounded-md w-full"
          />
        </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Available Time Slots</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {slots.map((slot, index) => (
            <button
              key={index}
              disabled={slot.status === "booked"}
              className={`p-3 rounded-md text-sm text-center font-medium transition ${
                slot.status === "available"
                  ? "bg-green-100 text-green-800 hover:bg-green-200"
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
