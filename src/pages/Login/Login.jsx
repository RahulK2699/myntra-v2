import React, { useState } from "react";
import Form from "./Form";
import login from "../../assets/images/login.webp";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Validator from "validatorjs";
import signup_data from "./fields";

export const Login = () => {
  const [params, setParams] = useState(signup_data["fields"]);
  const [errors, setErrors] = useState(signup_data["fields"]);
  const rules = signup_data["rules"];

  const handleChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  console.log(params);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate(params, rules)) return;

    console.log("form validated");
  };

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
          value={params.login_email}
          error={errors.login_email}
          onChange={handleChange}
        />
        <Input
          label="password"
          type="password"
          name="login_password"
          size="small"
          autoComplete={false}
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

        <Button onClick={handleSubmit} className=" w-full rounded-none ">
          CONTINUE
        </Button>

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
