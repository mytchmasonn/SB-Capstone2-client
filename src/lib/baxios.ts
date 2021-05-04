import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.PROD_TYPE === "production"
      ? "https://api.html8pdf.com"
      : "http://localhost:8000",
});

instance.interceptors.request.use(
  async (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
