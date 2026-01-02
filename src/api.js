import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/users",
});

// Request interceptor to attach access token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 (token expired)
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = localStorage.getItem("refresh");

      if (refresh) {
        try {
          const res = await axios.post("http://127.0.0.1:8000/api/users/token/refresh/", { refresh });
          const newAccess = res.data.access;
          localStorage.setItem("access", newAccess);

          // Update header and retry original request
          originalRequest.headers.Authorization = `Bearer ${newAccess}`;
          return axios(originalRequest);
        } catch (err) {
          // Refresh token invalid → log out
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login";
          return Promise.reject(err);
        }
      } else {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;
