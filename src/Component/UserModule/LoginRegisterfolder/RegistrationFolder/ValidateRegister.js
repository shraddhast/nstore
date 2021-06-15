export default function validateInfo(valid) {
  let errors = {};

  if (valid.firstName === "") {
    errors.firstName = "Name required";
  } else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(valid.firstName)) {
    errors.firstName = "Only Alphabets are allowed";
  }

  if (valid.lastName === "") {
    errors.lastName = "Name required";
  } else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)?$/.test(valid.lastName)) {
    errors.lastName = "Only Alphabets are allowed";
  }
  if (!valid.email) {
    errors.email = "Email required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(valid.email)) {
    errors.email = "Not a valid Email";
  }
  if (valid.password === "") {
    errors.password = "Enter Password";
  } else if (!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(valid.password)) {
    errors.password = "Password should be Alphanumeric";
  } else if (valid.password.length <= 8 || valid.password.length > 12) {
    errors.password = "Password length should be between 8-12";
  }

  if (valid.confirm_password === "") {
    errors.confirm_password = "Enter Password";
  } else if (valid.confirm_password !== valid.password) {
    errors.confirm_password = "Password did not match";
  }

  if (valid.mobile === " ") {
    errors.mobile = "Phone number required";
  } else if (!/^[0-9]{10}$/.test(valid.mobile)) {
    errors.mobile = "10 digit number required";
  }

  if (valid.gender == "") {
    errors.gender = "Select Gender";
  }

  return errors;
}
