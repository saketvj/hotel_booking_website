import React from "react";
import { InputBox } from "../inputBox/InputBox";
import "./signUpForm.scss";
import { useState, useRef } from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
export const SignUpForm = () => {
  const signInWithGoogle = async () => {
    // signInWithPopup(auth, provider);
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const data = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      width: "45%",
      placeholder: "First Name",
      label: "First Name",
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      width: "45%",
      placeholder: "Last Name",
      label: "Last Name",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      width: "45%",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 4,
      name: "phoneNo",
      type: "number",
      width: "45%",
      placeholder: "Phone Number",
      label: "PhoneNo",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      width: "100%",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      width: "100%",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];
  // console.log(userName);
  // const userNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userNameRef);
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(values);
  return (
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <div className="heading">
          <h1 className="text-3xl">Sign Up</h1>
          <p>Let’s get you all set up so you can access your personal account.</p>
        </div>
        <div className="info">
          <div className="info50">
            {data.map((d) => {
              return <InputBox key={d.id} {...d} value={values[d.name]} onChange={onChange} />;
            })}

            {/* <InputBox setUserName={setUserName} />
            <InputBox setUserName={setUserName} />
            <InputBox setUserName={setUserName} /> */}
          </div>
          {/* <InputBox /> */}
          {/* <InputBox /> */}
          <input style={{ width: "16px", height: "16px", marginRight: "10px", marginBottom: "20px" }} type="checkbox" />I agree to all the <span style={{ color: "red" }}>Terms</span> and <span style={{ color: "red" }}>Privacy Policies.</span>
        </div>

        <div className="entry">
          <button className="btn" type="submit">
            Login
          </button>
          <div className="text">
            Already have an account?<span> Login</span>
          </div>
        </div>

        <div className="loginWith">
          <div className="loginn">Or SignUp with</div>
          <div className="line1"></div>
        </div>

        <div className="footer">
          <div className="icons">
            <div className="icon1 icon">
              <img src="assets/facebook.png" alt="" />
            </div>
            <div onClick={signInWithGoogle} className="icon2 icon">
              <img src="assets/google.png" alt="" />
            </div>
            <div className="icon3 icon">
              <img src="assets/apple.png" alt="" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
