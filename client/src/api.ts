import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3035",
  withCredentials: true,
});
