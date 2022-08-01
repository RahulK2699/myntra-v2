import React from "react";

export const Li = ({ children }) => {
  return (
    <li className="border-b-4 border-b-[#fff] hover:border-b-4 hover:border-b-btnred py-6 px-2">
      {children}
    </li>
  );
};
