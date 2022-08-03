import React from "react";
const Form = ({ children, className, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-4  px-7 ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
