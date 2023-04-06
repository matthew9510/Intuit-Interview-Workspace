import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Wrapper } from "./Components/Styled";
import Login from "./Components/Login";
import Home from "./Components/Home";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <Wrapper>
      <Navbar />
      <Router>
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
          )}
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  );
};

export default App;
