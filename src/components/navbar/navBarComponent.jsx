import React from "react";
import myntralogo from "../../assets/images/myntralogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

function NavbarComponentProps(props) {
  return (
    <div className=" border-2 border-red-500 flex w-full items-center">
      <div>
        <img className="w-12" src={myntralogo} alt="myntra" />
      </div>
      <div className=" w-1/2">
        <ul className="  flex justify-between font-semibold">
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME & LIVING</li>
          <li>BEAUTY</li>
          <li>STUDIO</li>
        </ul>
      </div>
      <div className="w-full relative">
        <div className=" absolute top-3 left-2">
          <SearchIcon fontSize="medium" />
        </div>
        <input
          className=" outline-none bg-gray-100 py-3 w-2/5 placeholder:pl-10"
          type="text"
          placeholder="Search for products,brands and more"
        />
      </div>
      <div className=" flex gap-3">
        <div className=" text-center">
          <PersonOutlineRoundedIcon />
          <p>Profile</p>
        </div>
        <div className=" text-center">
          <FavoriteBorderRoundedIcon />
          <p>Wishlist</p>
        </div>
        <div className=" text-center">
          <ShoppingBagOutlinedIcon />
          <p>Bag</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponentProps;
