import { useState } from "react";
import handleLogin from "../../Utils/auth/handleLogin";
import handleLogout from "../../Utils/auth/handleLogout";
import handleRegister from "../../Utils/auth/handleRegister"; // New function for registration
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Track registration mode
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(
      [
        setLoading,
        setIsLoginFailed,
        setResponseMessage,
        { username, password },
      ],
      navigate,
      location
    );
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await handleRegister(
      [
        setLoading,
        setIsLoginFailed,
        setResponseMessage,
        { username, password },
      ],
      navigate,
      location
    );
  };

  return (
    <div>
      <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {isRegistering ? "Register" : "Login"}
        </button>

        {/* Toggle between login and register form */}
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "Already have an account? Login"
            : "Create a new account"}
        </button>
      </form>
      <button onClick={handleLogout}>Logout</button>

      {isLoginFailed && <p>{responseMessage}</p>}
    </div>
  );
}

export default Login;
