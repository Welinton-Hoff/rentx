import axios from "axios";

const api = axios.create({
  baseURL: "http://169.254.234.30:3333",
});

export default api;
