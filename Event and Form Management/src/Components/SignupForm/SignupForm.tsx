import React, { useState, useEffect } from "react";
import "./SignupForm.css";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsSignedUp(true);
  }, []);

  const validateEmail = (email: string) =>
    /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const validateName = (name: string) => name.length >= 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateName(name)) {
      setError("Name must be at least 5 characters");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email must be in the format xxxx@gmail.com");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character"
      );
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    setIsSignedUp(true);
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsSignedUp(false);
  };

  return (
    <div className="form-container">
      {isSignedUp ? (
        <div className="signup-success">
          <h2>Signed up successfully</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Signup</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
}
