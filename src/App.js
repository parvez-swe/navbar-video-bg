import React from "react";
import Index from "./components/Navbar/index";

import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Index />
      </Router>
      <Main />
    </>
  );
}

export default App;
