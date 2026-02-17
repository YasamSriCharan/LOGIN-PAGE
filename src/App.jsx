import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mode, setMode] = useState("signin");

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app">
      <h1>Authentication Demo</h1>

      {isAuthenticated ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <>
          <div className="tabs">
            <button onClick={() => setMode("signin")}>
              Sign In
            </button>
            <button onClick={() => setMode("signup")}>
              Sign Up
            </button>
          </div>


          {mode === "signin" ? (
            <SignIn onAuth={handleAuthSuccess} />
          ) : (
            <SignUp onAuth={handleAuthSuccess} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
