import React from "react";
// import RandomNumber from "./RandomNumber";
import { MainContent, Greeting } from "./Styled";
import TalkingPoints from "./TalkingPoints";

const Home: React.FC = () => {
  return (
    <MainContent>
      <Greeting>Hello again Intuit, it's a pleasure to be back!</Greeting>
      <TalkingPoints />
      {/*<RandomNumber />*/}
    </MainContent>
  );
};

export default Home;
