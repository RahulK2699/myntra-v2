import React from "react";
import Navbar from "../pages/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <main>{children}</main>
    </div>
  );
};
