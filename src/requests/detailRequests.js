import { axiosInstance } from "../helper/axios";

// Fetch cat detail
export const fetchCatDetail = async (id) => {
  const response = await axiosInstance.get(`images/${id}`);
  return response.data;
};
