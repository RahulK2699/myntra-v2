import React from "react";
import { Link } from "react-router-dom";

export const Menuhover = ({ categoryName, items = [], className }) => {
  return (
    <div className={"pt-7  px-4 " + className}>
      <ul className=" w-44">
        <li className=" text-btnred mb-1 text-xs">{categoryName}</li>
        {items.map((e, index) => (
          <Link to="/home/products">
            {" "}
            <li
              // style={{ stroke: "#000", strokeWidth: "0.05rem" }}
              className=" font-thin text-xs mb-1 hover:font-extrabold cursor-pointer"
              key={index + 1}
            >
              {e}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

/*
import { Transition } from "@headlessui/react";
import { useState } from "react";

function MyComponent() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        Toggle
      </button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will fade in and out
      </Transition>
    </div>
  );
}

export default MyComponent;

 */
