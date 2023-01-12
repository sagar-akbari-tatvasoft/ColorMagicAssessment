import { axiosInstance } from "../helper/axios";

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
