import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="unprotected-navbar">
      <div className="esmark-Logo">
        <h1>
          <Link to="/">Hello World Bana</Link>
          Hekllllllkjbhsv
        </h1>
      </div>
      <li className="navbar-li">
        <Link to="/signup">Sign up</Link>
      </li>
      <li className="navbar-li">
        <Link to="/login">Login</Link>
      </li>
    </nav>
  );
}

export default Navbar;
