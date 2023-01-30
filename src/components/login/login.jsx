import React from "react";
import "./login.scss";

export default function login() {
  return (
    <div className="loginPage">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="assets/logo.svg" alt="" />
          </div>
          <div className="itemContainer">
            <h1>Login</h1>
            <p>Login to access your Golobcce account</p>

            <form action="/home">
              <label>
                <input type="email" placeholder="email" />
              </label>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="assets/login.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
