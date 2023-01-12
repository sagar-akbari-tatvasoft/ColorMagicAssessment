import { axiosInstance } from "../helper/axios";
import { INCREMENT_PAGE } from "../pages/home/CatContext";

// Fetch cats infomation
export const fetchCatsInfo = async ({
  page = 1,
  selectedBreed,
  dispatchEvent,
}) => {
  if (!selectedBreed) {
    throw new Error("No breed selected.");
  }
  const response = await axiosInstance.get(`images/search`, {
    params: {
      page: page,
      limit: 10,
      breed_id: selectedBreed,
      order: "ASC",
    },
  });
  dispatchEvent(INCREMENT_PAGE);
  return response.data;
};

// Fetch breeds type
export const fetchBreedType = async () => {
  const response = await axiosInstance.get("breeds");
  return response.data.map((value) => {
    return {
      value: value.id,
      label: value.name,
    };
  });
};
