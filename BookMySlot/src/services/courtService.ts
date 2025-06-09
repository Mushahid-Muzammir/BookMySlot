import api from "./api";


export const getCourts = async () => {
  try {
    const response = await api.get("/courts");
    return response.data;
  } catch (error) {
    console.error("Error fetching courts data:", error);
    throw error;
  }
};

