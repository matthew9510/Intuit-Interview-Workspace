import React, { Dispatch, SetStateAction } from "react";
import LoginForm from "./LoginForm";

interface IProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<IProps> = ({ setIsLoggedIn }) => {
  const onSubmit = (email: string, hashedPass: string) => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </>
  );
};

export default Login;
