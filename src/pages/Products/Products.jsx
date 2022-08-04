import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Body from "../../components/Body/Body";
import Breadcrumb from "../../components/BreadCrumb/Breadcrumb";
import StarIcon from "@mui/icons-material/Star";
import Button from "../../components/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const Products = () => {
  const { axiosInstance } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(-1);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axiosInstance
      .get("/product")
      .then((res) => {
        // console.log(res.data.data.data);
        const addProp = res.data.data.data.map((e) => {
          return {
            ...e,
            isclicked: false,
          };
        });
        setProducts(addProp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (el) => {
    setProducts(
      products.map((item) => {
        if (item.id === el.id) {
          return {
            ...item,
            isclicked: true,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className=" mx-5 ">
      <Breadcrumb path={"/home"} currentPage={"products"} items={["home"]} />
      <p className="text-xs mt-3 ">
        <strong className=" opacity-100">Men-T-Shirts</strong> :
        <span className=" opacity-70"> 20000 items</span>
      </p>
      <Body>
        <div className=" flex flex-wrap border-l  w-full gap-12  justify-between p-5">
          {" "}
          {products.map((e, index) => (
            <div
              key={index + 1}
              onMouseEnter={() => {
                setShow(e.id);
              }}
              onMouseLeave={() => {
                setShow(-1);
              }}
              className={` h-fit rounded-sm hover:shadow-xl`}
            >
              <div className=" relative">
                {" "}
                <img
                  className=" w-48 h-64 object-cover"
                  src={e?.image_url}
                  alt="product_image"
                />
                <div className=" text-xs bg-white w-fit p-1 rounded-sm bg-opacity-70 absolute bottom-1 left-2 font-bold">
                  {e?.rating}{" "}
                  <StarIcon sx={{ fontSize: "13px" }} className=" text-star" />{" "}
                  | 2.5k
                </div>
              </div>
              <div className=" relative">
                <h1 className=" font-bold text-sm mt-2  ml-2">
                  {e?.brand_name}
                </h1>
                <p className=" text-xs font-thin font-sans mb-2  ml-2">
                  {e?.type_of_shirt}
                </p>
                {/* Hovering Content  */}
                <div
                  className={`absolute w-full bottom-0 bg-white px-2 pt-3 ${
                    show === e.id ? "flex flex-col" : "hidden"
                  }`}
                >
                  <Button
                    onClick={() => handleClick(e)}
                    className={`   w-full text-xs font-thin border border-gray-500 border-opacity-60 rounded-none py-[3px] ${
                      e.isclicked
                        ? "bg-gray-600 text-white "
                        : "bg-white text-black"
                    }`}
                  >
                    <p className="flex items-center gap-1 justify-center">
                      {e?.isclicked ? (
                        <FavoriteIcon
                          className=" text-red-500"
                          fontSize="small"
                        />
                      ) : (
                        <FavoriteBorderIcon className=" " fontSize="small" />
                      )}
                      <p className="mt-[2px] font-bold">
                        {" "}
                        {e?.isclicked ? "WISHLISTED" : "WISHLIST"}
                      </p>
                    </p>
                  </Button>
                  <p className=" font-sans font-thin text-xs mt-3">
                    Sizes: S,M,L,XL{" "}
                  </p>
                </div>
              </div>
              <div className=" text-xs ml-2 pb-1">
                {e?.discount !== "no-discount" ? (
                  <p className="font-bold">
                    Rs. {e?.price - (e?.price * parseInt(e?.discount)) / 100}{" "}
                    <span className=" line-through font-thin opacity-70">
                      Rs. {e?.price}
                    </span>
                    <span className=" text-amber-500 font-thin">
                      ({e?.discount}% OFF)
                    </span>
                  </p>
                ) : (
                  <p className=" font-bold">Rs. {e?.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Body>
    </div>
  );
};
