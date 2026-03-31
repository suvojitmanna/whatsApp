import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_URL}/api`;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const sendOtp = (phone, dialCode, email) => {
  return axiosInstance.post("/auth/send-otp", {
    phone,
    dialCode,
    email,
  });
};

export const verifyOtp = (phone, dialCode, otp, email) => {
  return axiosInstance.post("/auth/verify-otp", {
    phone,
    dialCode,
    otp,
    email,
  });
};

export const updateUserProfile = (formData) => {
  return axiosInstance.put("/auth/update-profile", formData);
};

export default axiosInstance;