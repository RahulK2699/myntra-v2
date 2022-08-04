import React, { useContext } from "react";
import Navbar from "../pages/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";
export const Layout = ({ children }) => {
  const { isOpacity } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <main className={isOpacity ? " opacity-50" : ""}>{children}</main>
    </div>
  );
};
