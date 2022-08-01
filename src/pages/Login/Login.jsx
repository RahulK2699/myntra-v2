import React from "react";
import Form from "./Form";
import login from "../../assets/images/login.webp";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const Login = () => {
  return (
    <div className=" w-[350px] bg-[#fff] mx-auto mt-7 rounded-sm ">
      <img className=" object-cover bg-lightpink" src={login} alt="login" />

      <Form className=" gap-6 pb-32">
        <h1>
          <span className=" text-lg font-semibold font-whitneyssm">Login</span>{" "}
          or{" "}
          <span className=" text-lg font-semibold font-whitneyssm">Signup</span>
        </h1>
        <Input
          label="email"
          type="text"
          name="login_email"
          size="small"
          autoComplete={false}
          required={true}
        />
        <Input
          label="password"
          type="password"
          name="login_password"
          size="small"
          autoComplete={false}
          required={true}
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

        <Button className=" w-full rounded-none ">CONTINUE</Button>

        <p>
          Dont have a account?{" "}
          <span className=" text-btnred text-sm font-semibold tracking-tighter">
            Signup here
          </span>
        </p>
      </Form>
    </div>
  );
};
