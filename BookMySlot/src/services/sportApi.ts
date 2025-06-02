import api from "./api"; 
import type { Sport } from "../dataType";

export const getAllSports = async (): Promise<Sport[]> => {
  const response = await api.get<Sport[]>("/sports");
  return response.data;
};
