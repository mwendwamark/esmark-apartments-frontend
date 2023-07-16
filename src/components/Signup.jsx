import React, { useState } from "react";
import "./App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(() => {
          setName("");
          setEmail("");
          setPassword("");
          setPasswordConfirmation("");
        });
      } else {
        r.json().then((e) => setError(e.errors));
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
              requried
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
              value={passwordConfirmation}
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
            <div>
             {}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
