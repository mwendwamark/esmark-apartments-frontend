import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router
import "../Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };


  return (

      <header>
        <h3 className="Navbar-h3">Esmark Appartments</h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link> {/* Use Link instead of anchor tag */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
 
  );
}

export default Navbar;
