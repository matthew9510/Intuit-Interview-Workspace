import React from "react";
// import IntuitLogo from "../Assets/intuit-cornerstone-brand-lockup-1-line-color.svg";
import {Header, NavBar, NavBarImage, NavBarMintImage} from "./Styled";

const Navbar: React.FC = () => {
  return (
    <Header>
      {/*<Logo src={IntuitLogo} alt="Intuit's logo" />*/}
      <NavBar>
      <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/intuit_logo_RGB_blue.svg" alt="External SVG"/>
      <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-turbotax.svg" alt="External SVG"/>
      <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-credit-karma.svg" alt="External SVG"/>
      <NavBarMintImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mint.svg" alt="External SVG"/>
      <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-quickbooks.svg" alt="External SVG"/>
      <NavBarImage src="https://tbcdn.talentbrew.com/company/27595/v2_0/img/logo-mail-chimp.svg" alt="External SVG"/>
      </NavBar>
    </Header>
  );
};

export default Navbar;
