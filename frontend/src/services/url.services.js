import axios from "axios";

const apiUrl = `${import.meta.env.VITE_API_URL}/api`;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export const sendOtp = (phoneNumber, phoneSuffix, email) => {
  return axiosInstance.post("/auth/send-otp", {
    phoneNumber,
    phoneSuffix,
    email,
  });
};

export const verifyOtp = (phoneNumber, phoneSuffix, otp, email) => {
  return axiosInstance.post("/auth/verify-otp", {
    phoneNumber,
    phoneSuffix,
    otp,
    email,
  });
};

export const updateUserProfile = (formData) => {
  return axiosInstance.put("/auth/update-profile", formData);
};

export default axiosInstance;
