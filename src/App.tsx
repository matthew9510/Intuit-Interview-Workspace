import React from 'react';
import Footer from './Components/Footer';
import MineSweeper from './Components/Minesweeper';
import Navbar from './Components/Navbar';
// import RandomNumber from './Components/RandomNumber';
import { Wrapper, MainContent } from './Components/Styled';
// import TalkingPoints from './Components/TalkingPoints';

const App: React.FC = () => {
  return (
    <Wrapper>
      <Navbar/>
      <MainContent>
        {/* <Greeting>Hello again Intuit, it's a pleasure to be back!</Greeting>
        <TalkingPoints/>
        <RandomNumber/> */}
        <MineSweeper/>
      </MainContent>
      <Footer/>
    </Wrapper>
  );
}

export default App;
