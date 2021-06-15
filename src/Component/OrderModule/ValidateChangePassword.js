export default function validateInfo(valid) {
  let errors = {};

  if (valid.password === "") {
    errors.password = "Enter Old Password";
  }

  if (valid.newPassword === "") {
    errors.newPassword = "Enter Password";
  } else if (!/^(?=.*\d)(?=.*[a-z]).{4,14}$/.test(valid.newPassword)) {
    errors.newPassword = "Password should be Alphanumeric";
  } else if (valid.newPassword.length <= 8 || valid.newPassword.length > 12) {
    errors.newPassword = "Password length should be between 8-12";
  }

  if (valid.confirmNewPassword === "") {
    errors.confirmNewPassword = "Confirm Password";
  } else if (valid.confirmNewPassword !== valid.newPassword) {
    errors.confirmNewPassword = "Password did not match";
  }

  return errors;
}
