import axios from "axios";

const API_KEY =
  "live_6iv3Wxq2u5XWlFzEKLa5T757YExaiiUKsPOU0uWWxwYagKHoKtOo1NUxq4P6irtX";

const BASE_URL = "https://api.thecatapi.com/v1/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY,
  },
});
