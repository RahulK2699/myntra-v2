import React from "react";

export const TotalItems = ({ heading, count }) => {
  return (
    <h1 className=" font-semibold">
      {heading} -{" "}
      <span className=" text-gray-300 font-normal">{count}items</span>
    </h1>
  );
};
