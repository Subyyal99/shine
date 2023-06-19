import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./login.css";

function Login() {
  const [recuriter, setRecuriter] = useState("Recuriter");
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("here", username, password);
    setUsername("");
    setpassword("");
    setIsButtonDisabled(true);
  };

  const changingLabel = () => {
    if (recuriter == "Recuriter") {
      setRecuriter("Sign In");
    } else {
      setRecuriter("Recuriter");
    }
  };

  return (
    <>
      <div className="main">
        <div className="clippy">
          <h2 className="shine">Shine</h2>
        </div>
        <div className="signin-form">
          <div className="top-btn">
            <Button label={recuriter} rounded onClick={changingLabel}></Button>
          </div>
          <form className="form-div" onSubmit={handleSubmit}>
            <h3 className="heading_sign">Sign in</h3>
            <div>
              <p className="p-input-icon-left user">
                <i className="fas fa-user"></i>
                <InputText
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </p>
              <br />
              <span className="p-input-icon-left password">
                <i className="fas fa-lock"></i>
                <InputText
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </span>
              <br />
              <a className="forget" href="/">
                Forgot Password?
              </a>
              <br />
              <Button
                label="Login"
                rounded
                onClick={handleSubmit}
              />

              <p className="dont-have">
                Don't have an account?{" "}
                <a className="create" href="/">
                  Create an Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
