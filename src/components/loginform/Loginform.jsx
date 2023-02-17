import React, { useState } from "react";
import "./loginform.scss";
// src\config\firebase.ts

export function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const [newEntry] = {
      email: email,
      password: password,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form">
      <form action="" onSubmit={submitForm}>
        <div className="entry">
          <label htmlFor="email" className="boxName1">
            Email
          </label>
          <input className="inputt" type="text" name="email" id="email" autoComplete="off" value={email} placeholder onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="entry">
          <label htmlFor="password" className="boxName2">
            Password
          </label>
          <input className="inputt" type="password" autoComplete="off" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="entry remember">
          <div className="container">
            <label htmlFor="checkbox">Remember Me</label>
            <input className="checkbox" type="checkbox" autoComplete="off" id="checkbox" />
          </div>

          <div className="forgot">
            <a href="">Forgot Password</a>
          </div>
        </div>
        <div className="entry">
          <button className="btn" type="submit">
            Login
          </button>
          <div className="text">
            Don't have an account?<span> Sign Up</span>
          </div>
        </div>

        <div className="loginWith">
          <div className="loginn">Or login with</div>
          <div className="line1"></div>
        </div>

        <div className="footer">
          <div className="icons">
            <div className="icon1 icon">
              <img src="assets/facebook.png" alt="" />
            </div>
            <div className="icon2 icon">
              <img src="assets/google.png" alt="" />
            </div>
            <div className="icon3 icon">
              <img src="assets/apple.png" alt="" />
            </div>
          </div>
        </div>
      </form>

      <div>
        {allEntry.map((e) => {
          return (
            <div>
              {console.log(e.email)}
              <h1>{e.email}</h1>
              <h2>{e.password}</h2>
            </div>
          );
        })}
        {/* <p>Dont have an account?</p> */}
        {/* <a href="">Sign Up</a> */}
      </div>

      {/* <hr /> */}
      {/* <p>Or login with</p> */}
    </div>
  );
}
