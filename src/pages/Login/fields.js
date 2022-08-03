const signup_data = {
  fields: {
    phnno: "",
    password: "",
    full_name: "",
    email: "",
    gender: "",
    alternate_phn_no: "",
  },
  login_fields: {
    login_email: "",
    login_password: "",
  },
  rules: {
    phnno: "required|numeric|digits:10",
    password: "required|min:3",
    full_name: "required|string|min:2",
    email: "required|email",
    gender: "required",
  },
  login_rules: {
    login_email: "required|email",
    login_password: "required|min:3",
  },
};

export default signup_data;
