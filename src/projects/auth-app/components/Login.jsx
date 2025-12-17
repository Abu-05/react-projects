import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // Dummy validation (frontend auth simulation)
    if (email === "admin@test.com" && password === "1234") {
      login();
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  }

return (
  <AuthLayout>
    <h2>Login</h2>

    <form onSubmit={handleLogin}>
      <input
      style={{ width: "100%", boxSizing: "border-box" }}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
      style={{ width: "100%", boxSizing: "border-box" }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Login</button>
    </form>
  </AuthLayout>
);

}

export default Login;
