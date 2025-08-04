import axios from "axios";
import React from "react";
const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;