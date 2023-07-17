import React from "react";
import useLocalStorage from "use-local-storage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./NavBar";
import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import LoggedInUser from "./LoggedinUser";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Navbar />{" "}
        <FontAwesomeIcon
          icon={faToggleOn}
          className="toggle"
          onClick={switchTheme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/me" element={<LoggedInUser />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
