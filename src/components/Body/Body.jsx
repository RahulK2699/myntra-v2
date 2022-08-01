import React, { useState } from "react";

const Body = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <h1 className=" font-semibold">FILTERS</h1>
      <div
        className="relative"
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <p className="absolute">sort by:</p>
      </div>
    </div>
  );
};

export default Body;
