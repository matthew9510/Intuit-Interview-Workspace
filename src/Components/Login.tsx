import React, { Dispatch, SetStateAction } from "react";

interface IProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  }

const Login: React.FC<IProps> = ({setIsLoggedIn}) => {
  return <div></div>;
};

export default Login;
