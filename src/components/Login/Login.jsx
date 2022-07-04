import React from "react";
import GoogleButton from "react-google-button";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { googleSignIn , user} = useFirebase();
  return (
    <div>
      <GoogleButton onClick={googleSignIn} />
      {user?.displayName}
    </div>
  );
};

export default Login;
