const Validator = require("validatorjs");

function Validate(data, rules) {
  const validation = new Validator(data, rules);
  if (validation.fails()) {
    return validation.errors.errors;
  }
  return true;
}

export default Validate;
