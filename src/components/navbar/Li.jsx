import React from "react";

export const Li = ({ children, className, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={
        `border-b-4 border-b-[#fff] hover:border-b-4 hover:border-b-btnred py-6 px-2 opacity-70 cursor-pointer` +
        className
      }
    >
      {children}
    </li>
  );
};
