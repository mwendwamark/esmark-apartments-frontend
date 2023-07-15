import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, errors }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          setEmail("");
          setPassword("");
        });
      } else {
        r.json().then((e) => setErrors(e.errors));
      }
    });
  }

  const handleCheckboxChange = (e) => {
    setShowPassword(e.target.checked);
  };

  return (
    <>
      <div className="login-page">
        <div className="login">
          <div className="container">
            {" "}
            {/* <h1>Login</h1> */}
            <div className="top">
              <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </a>
              <a href="https://www.facebook.com/login">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://github.com/login">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
            <p className="divider">
              <span>Or</span>
            </p>
            <form onSubmit={handleSubmit} autoComplete="on">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="login-email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="login-password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="show-password-toggle"
                    checked={showPassword}
                    onChange={handleCheckboxChange}
                  />
                  Show Password
                </label>
              </div>
              <button type="submit">Login</button>
            </form>
            <div className="bottom">
              <p>Forgot Password? </p>
              <a href="/reset-password">Reset Password</a>
            </div>
            <div className="create-account">
              <p>Dont have an account?</p>
              <a href="/signup">Signup</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
