import React from "react";
const Form = ({ children, className }) => {
  return (
    <form className={`flex flex-col gap-4  px-7 ${className}`}>{children}</form>
  );
};

export default Form;
