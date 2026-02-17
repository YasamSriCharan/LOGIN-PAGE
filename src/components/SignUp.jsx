import { useState, useEffect } from "react";

const SignUp = ({ onAuth }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(username.length > 2 && email.includes("@"));
  }, [username, email]);

  return (
    <div className="card">
      <h2><style fo></style>SIGN UP</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        disabled={!isValid}
        onClick={onAuth}
      >
        Register
      </button>
    </div>
  );
};

export default SignUp;
