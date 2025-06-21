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

export const getCourtById = async (courtId : number) => {
  try {
    const response = await api.get(`/courts/${courtId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courts data:", error);
    throw error;
  }
};

export const getCourtBySportId = async (sportId : number) => {
  try{
    const response = await api.get(`/courts/sport/${sportId}`);
    return response.data;

  }catch(error){
    console.error("Error fetching court by sport ID:", error);
    throw error;
  }
}

export const getCourtImagesById = async(courtId : number) => {
  try{
      const response = await api.get(`/courts/courtImage/${courtId}`);
      return response.data;

  }catch(error){
    console.error("Error Fetching Court Images", error);
    throw error;
  }
}

export const getAvailableSlots = async(courtId : number, date : Date, duration : number) =>
{
  try{
    const response = await api.get(`/courts/GetAvailableSlots`, {
      params:{
        courtId : courtId,
        data : date,
        duration : duration
      }
    });
    return response.data;

  }catch(error)
  {
    console.error("Error fetching Slots", error);
    throw error;
  }
}

