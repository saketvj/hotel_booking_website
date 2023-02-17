import React from "react";
import "./inputBox.scss";
export const InputBox = (props) => {
  //   const divstyle = {
  //     width: "${ width }",
  //     // backgroundColor: ${ heading },
  //   };

  //   const Button = styled.button`
  //     background-color: ${(props) => props.color};
  //   `;

  // const wid = width;
  const { label, onChange, id, width, ...inputProps } = props;
  return (
    <div className="outerBox" style={{ width: width }}>
      <div>
        <p className="heading ">{label}</p>
      </div>
      <div className="inBox ">
        <label htmlFor={label}></label>
        <input {...inputProps} onChange={onChange} className="insideText" />
      </div>
    </div>
  );
};
