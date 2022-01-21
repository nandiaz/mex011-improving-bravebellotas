import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase-config";
import { Login } from "../../Firebase/auth";
import { onAuthStateChanged } from "@firebase/auth";
import { Nav } from "./Nav";
import "../Styles/Login.css"
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
      navigate("/inside");
      console.log(loginEmail);
    }
    catch (error) {
      setError("Contraseña o usuario no válido");
    }
  };

  return (
    <>
      <Nav/>
      <section className="log-in">
      <div className="left-login">
        <div className="text-login" >
        <p>Career</p>
        <p>Planning</p>
        </div>
      
        <img src={process.env.PUBLIC_URL + '/career-build.png' } alt='Improve logo' className='path-login' />
      </div>
      <div className="right-login">
        <p>Hi Improver!</p>
        <p className="LogIn-Text">Log in to start</p>
        <form className="Form" onSubmit={handleSubmit}>
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
          <button className="btt-submit" type="submit" value="INGRESAR">INGRESAR</button>
          {/* <Link to="/" className="Continue-with-email">Continue with email</Link> */}
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