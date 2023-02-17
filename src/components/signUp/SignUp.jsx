import React from "react";
import "./signUp.scss";
// import { InputBox } from "../inputBox/InputBox";
import { MySlider } from "../mySlider/MySlider";
import { SignUpForm } from "../signUpForm/SignUpForm";

export default function SignUp() {
  const slides = [
    {
      url: "assets/hotel.jpg",
      title: "Forest",
    },
    {
      url: "assets/pex.jpg",
      title: "Hotel",
    },
    { url: "assets/pexel.jpg", title: "scene" },
  ];
  return (
    <div className="outerContainer bg-purple-600">
      <div className="mainContainer">
        <div className="left">
          <div className="slider">
            <MySlider slides={slides} />
          </div>

          {/* <InputBox width="100%" heading="Hello"></InputBox> */}
        </div>
        <div className="right">
          <div className="header">
            <img src="assets/logo.svg" alt="" />
          </div>
          <div className="signup">
            <SignUpForm />
          </div>
          {/* <div className="footer">sss</div> */}
        </div>
      </div>
    </div>
  );
}
