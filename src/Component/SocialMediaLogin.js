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
        appId="494585981737319"
        fields="name,email,picture"
        textButton="  LOGIN WITH GOOGLE"
        icon="fa-facebook  "
        callback={responseFacebook}
      />
      <br />

      <GoogleLogin
        clientId="188264738493-fi6mp5aj73po4ugl47kcsg5eurbkmuf2.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
}

export default SocialMediaLogin;
