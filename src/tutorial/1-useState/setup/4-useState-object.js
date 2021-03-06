import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World!" });
  };

  // Can setup as seperate values as well
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState("Random Message");
  console.log(person);
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
