import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          setName("");
          setEmail("");
          setPassword("");
          setPasswordConfirmation("");
          setErrors([]);
          alert(`Account created successfully!`);
          navigate("/login")
        });
      } else {
        r.json().then((e) => setErrors(e.errors));
      }
    });
  }

  const handleCheckboxPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleCheckboxPasswordConfirmChange = (e) => {
    setShowConfirmPassword(e.target.checked);
  };

  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <div className="signup-header">
            <h4>Signup</h4>
          </div>

          <form action="submit" onSubmit={handleSubmit} autoComplete="on">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter Full Name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter Your Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
            <label className="signup-checkbox-label">
              <input
                type="checkbox"
                className="show-password-toggle"
                checked={showPassword}
                onChange={handleCheckboxPasswordChange}
              />
              Show Password
            </label>
            <label htmlFor="password-confirm">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              id="password-confirm"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="new-password"
              required
            />
            <label className="signup-checkbox-label">
              <input
                type="checkbox"
                className="show-password-toggle"
                checked={showConfirmPassword}
                onChange={handleCheckboxPasswordConfirmChange}
              />
              Show Password
            </label>
            <button type="submit">Signup</button>
            <div style={{ color: "red" }}>
              {errors.map((e) => (
                <p>{e}</p>
              ))}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
