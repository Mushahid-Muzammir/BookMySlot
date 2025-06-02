import axios from "axios";

const courtsApi = axios.create({
  baseURL: "http://localhost:5275/court",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCourts = async () => {
  try {
    const response = await courtsApi.get("/getAll");
    return response.data;
  } catch (error) {
    console.error("Error fetching courts data:", error);
    throw error;
  }
};

export default courtsApi;