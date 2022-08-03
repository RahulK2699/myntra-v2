import React from "react";

export const Menuhover = ({ categoryName, items = [], className }) => {
  return (
    <div className={"pt-7  px-4 " + className}>
      <ul className=" w-44">
        <li className=" text-btnred mb-1 text-xs">{categoryName}</li>
        {items.map((e, index) => (
          <li
            // style={{ stroke: "#000", strokeWidth: "0.05rem" }}
            className=" font-thin text-xs mb-1 hover:font-extrabold cursor-pointer"
            key={index + 1}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
};
