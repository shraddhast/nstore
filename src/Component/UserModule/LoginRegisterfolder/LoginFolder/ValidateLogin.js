export default function validateInfo(valid) {
  let errors = {};

  if (!valid.email) {
    errors.email = "Email required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(valid.email)) {
    errors.email = "Not a valid Email";
  }

  if (valid.password === "") {
    errors.password = "Enter Password";
  }

  return errors;
}
