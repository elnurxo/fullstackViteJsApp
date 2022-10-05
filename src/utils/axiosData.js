import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getUsers = async () => {
  return await axiosInstance.get("users");
};

export const addUser = async (data) => {
    return await axiosInstance.post("users", JSON.stringify(data));
  };

