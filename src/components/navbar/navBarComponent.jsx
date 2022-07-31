import React from "react";
import myntralogo from "../../assets/images/myntralogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Li } from "./Li";

function NavbarComponentProps({ data }) {
  return (
    <div className=" px-7 flex w-full gap-5 items-center justify-between shadow-md">
      <div>
        <img className="w-12" src={myntralogo} alt="myntra" />
      </div>
      <div className=" w-1/2 max-w-lg">
        <ul className="  flex justify-between font-semibold text-sm">
          {/* <li className="border-b-4 border-b-[#fff] hover:border-b-4 hover:border-b-btnred py-5">
            MEN
          </li> */}
          <Li>Men</Li>
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
          className="  outline-none bg-gray-100 py-2 w-full pl-12 text-sm text-gray-400"
          type="text"
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className=" flex w-36 gap-3 justify-between">
        <div className=" text-center">
          <PersonOutlineRoundedIcon />
          <p className=" font-semibold text-xs">Profile</p>
        </div>
        <div className=" text-center">
          <FavoriteBorderRoundedIcon />
          <p className=" font-semibold text-xs">Wishlist</p>
        </div>
        <div className=" text-center">
          <ShoppingBagOutlinedIcon />
          <p className=" font-semibold text-xs">Bag</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponentProps;
