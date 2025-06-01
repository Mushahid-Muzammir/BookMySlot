import  { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SelectDate = () => {

const fakeApi = (selectedDate: string) => {
  // simulate backend call
  return Promise.resolve({
    date: selectedDate,
    availableSlots: [
      { startTime: "08:00", endTime: "09:00", status: "available" },
      { startTime: "09:00", endTime: "10:00", status: "booked" },
      { startTime: "10:00", endTime: "11:00", status: "available" }
    ]
  });
};

  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState<any[]>([]);

  useEffect(() => {
    const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
    fakeApi(formatted).then((res) => setSlots(res.availableSlots));
  }, [date]);


  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Pick a Date</h2>

      <DatePicker
        selected={date}
        dateFormat="yyyy-MM-dd"
        className="border p-2 rounded-md mb-6"
      />

      <h3 className="text-lg font-semibold mb-3">Available Time Slots</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {slots.map((slot, index) => (
          <button
            key={index}
            disabled={slot.status === "booked"}
            className={`p-3 rounded-md text-sm text-center transition font-medium ${
              slot.status === "available"
                ? "bg-green-100 text-green-800 hover:bg-green-200"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}>
            {slot.startTime} - {slot.endTime}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectDate