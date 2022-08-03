import React, { useState } from "react";
import myntralogo from "../../assets/images/myntralogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Li } from "./Li";
import { Menuhover } from "./Menuhover";
import menuItems from "./items";

function NavbarComponentProps({ data }) {
  const [show, setShow] = useState(false);

  return (
    <div className=" px-7 flex w-full gap-5 items-center justify-between shadow-md relative z-10 bg-white">
      <div>
        <img className="w-12" src={myntralogo} alt="myntra" />
      </div>
      <div className=" w-1/2 max-w-lg">
        <ul className="  flex justify-between font-semibold text-sm">
          {/* <li className="border-b-4 border-b-[#fff] hover:border-b-4 hover:border-b-btnred py-5">
            MEN
          </li> */}
          <Li
            onMouseLeave={() => setShow(false)}
            onMouseEnter={() => setShow(true)}
          >
            MEN
            {show && (
              <div
                className="absolute top-16 left-36  transition duration-150 ease-in-out origin-top flex"
                onMouseLeave={() => setShow(false)}
              >
                <div className=" flex flex-col">
                  <Menuhover
                    categoryName={"Topwear"}
                    items={menuItems.topwear}
                  />
                  <Menuhover
                    categoryName={"Indian & Festive Wear"}
                    items={menuItems["Indian & Festive Wear"]}
                  />
                </div>
                <div className=" flex flex-col">
                  {" "}
                  <Menuhover
                    categoryName={"Bottomwear"}
                    items={menuItems.Bottomwear}
                  />
                  <Menuhover
                    categoryName={"Innerwear & Sleepwear"}
                    items={menuItems["Innerwear & Sleepwear"]}
                  />
                </div>
                <div className=" flex flex-col">
                  {" "}
                  <Menuhover
                    categoryName={"Gadgets"}
                    items={menuItems.Gadgets}
                  />
                  <Menuhover
                    categoryName={"Sports & Active Wears"}
                    items={menuItems["Sports & Active Wears"]}
                  />
                </div>
              </div>
            )}
          </Li>
          <Li>WOMEN</Li>
          <Li>KIDS</Li>
          <Li>HOME & LIVING</Li>
          <Li>BEAUTY</Li>
          <Li>STUDIO</Li>
        </ul>
      </div>
      <div className=" w-2/5 max-w-md min-w-[300px] relative">
        <div className=" absolute top-[6px] left-2">
          <SearchIcon fontSize="medium" />
        </div>
        <input
          className="  outline-none  py-2 w-full pl-12 text-sm bg-gray-200 bg-opacity-40 placeholder:text-xs"
          type="text"
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className=" flex w-36 gap-3 justify-between">
        <div className=" text-center">
          <PersonOutlineRoundedIcon
            sx={{ stroke: "#fff", strokeWidth: "0.05rem" }}
            className=" opacity-80"
          />
          <p className=" font-semibold text-xs">Profile</p>
        </div>
        <div className=" text-center">
          <FavoriteBorderRoundedIcon
            sx={{ stroke: "#fff", strokeWidth: "0.05rem" }}
            className=" opacity-80"
          />
          <p className=" font-semibold text-xs">Wishlist</p>
        </div>
        <div className=" text-center">
          <ShoppingBagOutlinedIcon
            sx={{ stroke: "#fff", strokeWidth: "0.05rem" }}
            className=" opacity-80"
          />
          <p className=" font-semibold text-xs">Bag</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponentProps;
