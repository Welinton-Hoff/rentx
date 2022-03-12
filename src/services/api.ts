import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.34:3333", // Linux
  baseURL: "http://192.168.1.107:3333", // Windows
});

export default api;
