import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function SocialMediaLogin() {
  const responseFacebook = (response) => {};
  const responseGoogle = (response) => {};

  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_ID}
        callback={responseFacebook}
        fields="name,email,picture"
        icon="fa-facebook  "
        textButton="  LOGIN WITH GOOGLE"
      />

      <br />
      <br />

      <GoogleLogin
        buttonText="LOGIN WITH GOOGLE"
        clientId={process.env.REACT_APP_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default SocialMediaLogin;
