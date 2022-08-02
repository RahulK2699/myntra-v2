import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing,
  children,
  onClick,
}) {
  return (
    <button
      type={type}
      className={
        ` text-white h-10 px-4 py-2 bg-btnred border border-transparent rounded-md font-semibold text-xs  active:bg-opacity-50  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
