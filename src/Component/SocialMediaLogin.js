import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

function SocialMediaLogin() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_ID}
        fields="name,email,picture"
        textButton="  LOGIN WITH GOOGLE"
        icon="fa-facebook  "
        callback={responseFacebook}
      />

      <br />
      <br />

      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default SocialMediaLogin;
