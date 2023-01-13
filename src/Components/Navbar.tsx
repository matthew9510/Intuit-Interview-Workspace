import React from "react";
import IntuitLogo from "../Assets/intuit-cornerstone-brand-lockup-1-line-color.svg";
import { Header, Logo } from "./Styled";

const Navbar: React.FC = () => {
  return (
    <Header>
      <Logo src={IntuitLogo} alt="Intuit's logo" />
    </Header>
  );
};

export default Navbar;
