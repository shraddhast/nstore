export default function validateInfo(valid) {
  let errors = {};

  if (!valid.verification) {
    errors.verification = "Enter Verification Code";
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

  return errors;
}
