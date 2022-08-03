import React, { useContext, useState } from "react";
import Form from "./Form";
import login from "../../assets/images/login.webp";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Validator from "validatorjs";
import signup_data from "./fields";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [params, setParams] = useState(signup_data["login_fields"]);
  const [errors, setErrors] = useState(signup_data["login_fields"]);
  const [message, setMessage] = useState();
  const rules = signup_data["login_rules"];

  const navigate = useNavigate();
  const { axiosInstance, handleToken } = useContext(AuthContext);

  //Validation Function
  const validate = (params, rules) => {
    const validator = new Validator(params, rules, {});
    if (validator.fails()) {
      const fieldErrors = {};
      for (let key in validator.errors.errors) {
        fieldErrors[key] = validator.errors.errors[key][0];
      }
      console.log(fieldErrors);
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  //Setting Values in params
  const handleChange = (e) => {
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  //Calling Login API
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(params, rules)) return;

    axiosInstance
      .post("/login", {
        email: params.login_email,
        password: params.login_password,
      })
      .then((res) => {
        const token = res.data.data.token.token;
        localStorage.setItem("myntraToken", token);
        handleToken(token);
        navigate("/home");
        console.log(res);
      })
      .catch((error) => {
        const { message } = error.response.data;
        toast.error(message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // const errorMsg = errors[Object.keys(errors)[0]] || error.statusText;
        setMessage(message);
      });
  };

  return (
    <div className=" w-full bg-lightpink pt-7">
      <div className=" w-[350px] bg-[#fff] mx-auto  rounded-sm ">
        <img className=" object-cover bg-lightpink" src={login} alt="login" />

        <Form onSubmit={handleSubmit} className=" gap-6 pb-20 relative">
          <h1 className=" mt-10">
            <span className=" text-lg font-semibold font-whitneyssm">
              Login
            </span>{" "}
            or{" "}
            <span className=" text-lg font-semibold font-whitneyssm">
              Signup
            </span>
          </h1>
          <Input
            label="email"
            type="text"
            name="login_email"
            size="small"
            required={true}
            value={params.login_email}
            error={errors.login_email}
            onChange={handleChange}
          />
          <Input
            label="password"
            type="password"
            name="login_password"
            size="small"
            required={true}
            value={params.login_password}
            error={errors.login_password}
            onChange={handleChange}
          />
          <p className=" text-sm ">
            By continuing I agree to the{" "}
            <span className=" text-btnred font-semibold  text-sm tracking-tighter">
              Terms of Use
            </span>{" "}
            &{" "}
            <span className=" text-btnred font-semibold  text-sm tracking-tighter">
              Privacy Policy
            </span>{" "}
          </p>

          <Button type="submit" className=" w-full rounded-none ">
            CONTINUE
          </Button>

          <p>
            Dont have a account?{" "}
            <Link to="/signup">
              {" "}
              <span className=" text-btnred text-sm font-semibold tracking-tighter cursor-pointer">
                Signup here
              </span>
            </Link>
          </p>
          <p className=" absolute bottom-0 text-xs">{message}</p>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};
