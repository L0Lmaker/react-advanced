import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      console.log("submit the form");
      const person = { name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      console.log(people);
    } else {
      console.log("empty values");
    }
  };
  return (
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {people.map((person, index) => {
        const { id, name, email } = person;
        return (
          <div key={index} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
