import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase-config";
import { Login } from "../../Firebase/auth";
import { onAuthStateChanged } from "@firebase/auth";
import { Nav } from "./Nav";
import "../Styles/Login.css";
import Career from "../../assets/career-build.png"
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
//import useAuth from "../Hooks/useAuth";

export default function Home() {




  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Login(loginEmail, loginPassword);
      navigate("/");
      console.log(loginEmail);
    } catch (error) {
      navigate("/login");
      setError("The password or username is not valid");
    }
  };

  return (
    <>
      <Nav />
      <section className="log-in">

        <div className="left-login">

          
            <h1 className="p-career" >Career</h1>
            <h1 className="p-planning">Planning</h1>
          
          <picture className="img-login">
          <img
            src={Career}
            alt="Improve logo"
            className="path-login"
          />
          </picture>
          
        </div>
        <div className="right-login">
          <h2 className="login-hi">Hi, Improver!</h2>
          <h3 className="login-text">Login to start</h3>
          <form className="form-login" onSubmit={handleSubmit}>

            <TextField
              label="Email"
              variant="filled"
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
              value={loginEmail}
              className="input-log"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={loginPassword}
              className="input-log"
              onChange={(e) => setLoginPassword(e.target.value)}
              variant="filled"
              size="small"
            />
            <br />
            <br />            
            <div className="error-login">{error}</div>

            <Button 
            variant="contained" 
            size="medium" 
            color="primary"  
            className="btt-submit" 
            type="submit" 
            value="INGRESAR">
              Login
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

/* import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginAuth } from "../../Firebase/auth";
import { useAuthDataContext } from "../../Hooks/useAuth";
//import useAuth from "../Hooks/useAuth";


export default function Login() {
 
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

   
  const { onLogin } = useAuthDataContext();

  const loginUser = (e) => {
    e.preventDefault();
    let loginInfo = {};
    try {
      const res = LoginAuth(loginEmail, loginPassword);
      if (res) {
        loginInfo = res;
        navigate("/");
      }
    } catch (err) {
      setError(err);
    }
    onLogin(loginInfo);
  };

  return (
    <div className="LogIn">      
      <div className="LogIn-Form">
        <p className="LogIn-Text">Log in</p>
        <form className="Form">
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <div className="errorLogin">{error}</div>
          <button className="btt-submit" 
          type="submit" 
          value="INGRESAR" 
          onClick={(e) => loginUser(e)}>INGRESAR</button>
       
        </form>
       
      </div>
    </div>
  );
}   */
