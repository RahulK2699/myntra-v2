import React, { useState } from "react";
import CheckboxComponent from "../Checkbox";
import SelectComponent from "../Select";

const Body = ({ children, handleChange, products }) => {
  return (
    <div className=" mt-3 flex flex-col ">
      <div className=" flex justify-between border-b border-b-gray-300 ">
        <h1 className=" font-semibold text-sm mt-5 tracking-wide">FILTERS</h1>
        <SelectComponent
          Items={[
            { name: "Better Discount", value: "discount" },
            { name: "Price Low To High", value: "lth" },
            { name: "Price High To Low", value: "htl" },
          ]}
          func={""}
        />
      </div>
      {/* Filters */}
      <div className="flex">
        <div className=" flex flex-col max-w-[200px]">
          <div className=" border-b py-5">
            <h1 className=" mb-3 font-semibold text-xs tracking-wide">
              CATEGORIES
            </h1>
            <CheckboxComponent label={"TShirts"} onChange={handleChange} />
            <CheckboxComponent
              label={"Lounge TShirts"}
              onChange={handleChange}
            />
          </div>
          <div className=" border-b py-5">
            <h1 className=" mb-3 font-semibold text-xs tracking-wide">BRAND</h1>
            <CheckboxComponent label={"Roadster"} onChange={handleChange} />
            <CheckboxComponent label={"Nike"} onChange={handleChange} />
            <CheckboxComponent label={"Van Huesen"} onChange={handleChange} />
            <CheckboxComponent label={"Puma"} onChange={handleChange} />
            <CheckboxComponent label={"HRX"} onChange={handleChange} />
            <CheckboxComponent label={"Alen Solly"} onChange={handleChange} />
            <CheckboxComponent label={"DNMX"} onChange={handleChange} />
            <CheckboxComponent label={"Jack & Jones"} onChange={handleChange} />
          </div>
          <div className=" border-b py-5">
            <h1 className=" mb-3 font-semibold text-xs tracking-wide">PRICE</h1>
            <CheckboxComponent
              label={"Rs. 209 to Rs. 2405"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"Rs. 2405 to Rs. 4601"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"Rs. 4601 to Rs. 6797"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"Rs. 6797 to Rs. 8993"}
              onChange={handleChange}
            />
          </div>
          <div className=" border-b py-5">
            <h1 className=" mb-3 font-semibold text-xs tracking-wide">
              DISCOUNT RANGE
            </h1>
            <CheckboxComponent
              label={"10% and above"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"20% and above"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"30% and above"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"40% and above"}
              onChange={handleChange}
            />
            <CheckboxComponent
              label={"50% and above"}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Products  */}
        {children}
      </div>
    </div>
  );
};

export default Body;
