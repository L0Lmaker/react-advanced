import React, { useState } from "react";
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState("Hello World"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World!");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
