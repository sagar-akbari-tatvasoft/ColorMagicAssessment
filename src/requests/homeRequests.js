import { axiosInstance } from "../helper/axios";

// Fetch cats infomation
export const fetchCatsInfo = async ({ page = 1, breedId }) => {
  const response = await axiosInstance.get(`images/search`, {
    params: {
      page: page,
      limit: 10,
      breed_id: breedId,
      order: "ASC",
    },
  });
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
