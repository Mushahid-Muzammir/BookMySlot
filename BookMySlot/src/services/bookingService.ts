import api from "./api";

export const createBooking = async (bookingData: any) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (err) {
    console.error("Error creating a booking", err);
  }
};

export const getTodayBookings = async () => {
   try{
    const response = await api.get("/bookings");
    return response.data;
   }catch(error){
    console.error("Error fetching today's bookings", error);
   }
}

