import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    const success = login(email, password);

    if (success) {
      const role = email === "admin@gmail.com"
        ? "admin"
        : "student";

      navigate(role === "admin" ? "/admin" : "/student");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">

      <form onSubmit={handleLogin} className="login-box">

        <h2>Student Management System</h2>

        <h3>User Login</h3>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}

      </form>

    </div>
  );
}

export default Login;