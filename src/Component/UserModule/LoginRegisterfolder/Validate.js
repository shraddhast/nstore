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

  if (!valid.verification) {
    errors.verification = "Enter Verification Code";
  }

  if (!valid.email) {
    errors.email = "Email required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(valid.email)) {
    errors.email = "Not a valid Email";
  }

  if (valid.oldPassword === "") {
    errors.oldPassword = "Enter Old Password";
  }

  if (valid.password === "") {
    errors.password = "Enter Password";
  } else if (!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(valid.password)) {
    errors.password = "Password should be Alphanumeric";
  } else if (valid.password.length <= 8 || valid.password.length > 12) {
    errors.password = "Password length should be between 8-12";
  }

  if (valid.cPassword === "") {
    errors.cPassword = "Enter Password";
  } else if (valid.cPassword !== valid.password) {
    errors.cPassword = "Password did not match";
  }

  if (valid.phoneNumber === " ") {
    errors.phoneNumber = "Phone number required";
  } else if (!/^[0-9]{10}$/.test(valid.phoneNumber)) {
    errors.phoneNumber = "10 digit number required";
  }

  if (valid.radio == "") {
    errors.radio = "Select Gender";
  }

  return errors;
}
