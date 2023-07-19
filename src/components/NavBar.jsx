import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useLocalStorage from "use-local-storage";
import "./App.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <>
      <div className="app" data-theme={theme}>
        <header className="Navbar-header">
          <Link to="/">
            {" "}
            <h3 className="Navbar-h3">Apartments</h3>
          </Link>
          <nav ref={navRef}>
            <Link to="/"></Link>
            <Link to="/login" className="login-btn"> &#128273; Login</Link>
            <Link to="/signup" className="signup-btn">
              Signup
            </Link>

            {/* <FaBars /> */}
            <FontAwesomeIcon
              icon={faToggleOn}
              className="toggle-dark"
              onClick={switchTheme}
            />

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </header>
      </div>
    </>
  );
}

export default Navbar;
