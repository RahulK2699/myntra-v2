import React, { useContext, useState } from "react";
import myntralogo from "../../assets/images/myntralogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HoverContent from "./HoverData";
import { Li } from "./Li";
import menuItems from "./items";
import { AppContext } from "../../context/AppContext";

function NavbarComponentProps({ data }) {
  const [isShowing, setIsShowing] = useState(false);
  const { handleOpacity } = useContext(AppContext);

  return (
    <div className=" px-7 flex w-full gap-5 items-center justify-between shadow-md relative z-10 bg-white">
      <div>
        <img className="w-12" src={myntralogo} alt="myntra" />
      </div>
      <div className=" w-1/2 max-w-lg">
        <ul className="  flex justify-between font-semibold text-sm ">
          <Li
            onMouseLeave={() => {
              handleOpacity(false);
              setIsShowing(false);
            }}
            onMouseEnter={() => {
              handleOpacity(true);
              setIsShowing(true);
            }}
          >
            MEN
            {
              <HoverContent
                setIsShowing={setIsShowing}
                isShowing={isShowing}
                menuItems={menuItems}
              />
            }
          </Li>
          <Li
            onMouseLeave={() => {
              handleOpacity(false);
              setIsShowing(false);
            }}
            onMouseEnter={() => {
              handleOpacity(true);
              setIsShowing(true);
            }}
          >
            WOMEN
            {
              <HoverContent
                setIsShowing={setIsShowing}
                isShowing={isShowing}
                menuItems={menuItems}
              />
            }
          </Li>
          <Li>KIDS</Li>
          <Li className={" hover:border-b-yellow-500"}>HOME & LIVING</Li>
          <Li className={" hover:border-b-green-600"}>BEAUTY</Li>
          <Li className={""}>STUDIO</Li>
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
