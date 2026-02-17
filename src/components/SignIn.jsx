import { useState, useEffect } from "react";

const SignIn = ({ onAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Derived state validation
  useEffect(() => {
    setIsValid(email.includes("@") && password.length >= 6);
  }, [email, password]);

  return (
    <div className="card">
      <h2>SIGN IN</h2>

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

      <button
        disabled={!isValid}
        onClick={onAuth}
      >
        Submit
      </button>
    </div>
  );
};

export default SignIn;
