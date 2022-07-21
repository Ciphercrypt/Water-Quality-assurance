const Validator = require("validator");
const isEmpty = require("./is-empty");

const ValidateUserLogin = (data) => {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email) || Validator.isEmpty(data.email)) {
    errors.email = "email address is not valid or empty";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}

module.exports = ValidateUserLogin;
