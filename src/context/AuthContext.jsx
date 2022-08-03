import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  let getToken = localStorage.getItem("myntraToken");
  const [Token, setToken] = useState(getToken ? getToken : "");

  const handleToken = (newToken) => {
    localStorage.setItem("myntraToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    // localStorage.removeItem("role");
    localStorage.removeItem("myntraToken");
    // localStorage.removeItem("user");

    navigate("/login");
  };

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + Token,
      "Content-Type": "application/json",
    },
  });

  return (
    <AuthContext.Provider value={{ axiosInstance, Token, logout, handleToken }}>
      {children}
    </AuthContext.Provider>
  );
};
