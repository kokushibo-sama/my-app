import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(34, 34, 34)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "lightblue";
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        navTitle="My Text-Utils"
        link="some link"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route path="/about"> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
        <TextForm heading="This is My Heading" mode={mode} />
          <AboutUs />
      </div>
//       <div className="container m-3">
        
        {/* </Route> */}
        {/* <Route
              exact
              path="/"
              element={<TextForm heading="This is My Heading" mode={mode} />}
            />
            <Route exact path="/about" element={<AboutUs mode={mode} />} />
          </Routes> */}
//       </div>
      {/* </Router> */}
    </>
  );
}

export default App;
