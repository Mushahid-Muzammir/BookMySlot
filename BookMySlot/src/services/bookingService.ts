import api from "./api";

export const createBooking = async (bookingData: any) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (err) {
    console.error("Error creating a booking", err);
  }
};

