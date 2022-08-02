import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import RadioButton from "../../components/Radio";
import Form from "./Form";
import Validator from "validatorjs";
import signup_data from "./fields";

const Signup = () => {
  const [errors, setErrors] = useState(signup_data["fields"]);
  const [params, setParams] = useState(signup_data["fields"]);
  const rules = signup_data["rules"];

  const handleChange = (e) => {
    let { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  console.log(params);

  const handleSubmit = () => {
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
      <Form>
        {" "}
        <h1 className=" font-semibold text-[15px] mt-7">
          Complete your sign up
        </h1>
        <Input
          label="Mobile Number"
          name="phnno"
          type="text"
          size="small"
          value={params.phnno}
          autoComplete={false}
          required={true}
          onChange={handleChange}
          error={errors.phnno}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          size="small"
          autoComplete={false}
          required={true}
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          label="Full Name"
          name="full_name"
          type="text"
          size="small"
          value={params.full_name}
          autoComplete={false}
          required={true}
          onChange={handleChange}
          error={errors.full_name}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          size="small"
          autoComplete={false}
          required={true}
          onChange={handleChange}
          error={errors.email}
        />
        <div className=" flex justify-between text-sm relative">
          <p className=" relative top-[9px]">Select Gender :</p>
          <RadioButton onChange={handleChange} />
          <p className="absolute text-[10px] text-btnred -bottom-3">
            {errors.gender}
          </p>
        </div>
        <Input
          label="Alternate Mobile Number"
          name="alternate_phn_no"
          type="text"
          size="small"
          autoComplete={false}
          required={false}
          error="This will help recover your account if needed"
          onChange={handleChange}
        />
      </Form>
      <Button
        onClick={handleSubmit}
        className=" text-center mt-10 w-full rounded-none"
      >
        CREATE ACCOUNT
      </Button>
    </div>
  );
};

export default Signup;
