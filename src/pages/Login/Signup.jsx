import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import RadioButton from "../../components/Radio";
import Form from "./Form";

const Signup = () => {
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
          autoComplete={false}
          required={true}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          size="small"
          autoComplete={false}
          required={true}
        />
        <Input
          label="Full Name"
          name="full_name"
          type="text"
          size="small"
          autoComplete={false}
          required={true}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          size="small"
          autoComplete={false}
          required={true}
        />
        <div className=" flex justify-between ">
          <p className=" relative top-[5px]">Select Gender :</p>
          <RadioButton />
        </div>
        <Input
          label="Alternate Mobile Number"
          name="alternate_phn_no"
          type="text"
          size="small"
          autoComplete={false}
          required={false}
          helperText="This will help recover your account if needed"
        />
      </Form>
      <Button className=" text-center mt-10 w-full rounded-none">
        CREATE ACCOUNT
      </Button>
    </div>
  );
};

export default Signup;
