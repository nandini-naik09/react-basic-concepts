import React, { useState } from "react";
import Header from "./Header";
import "./App.css";
import Modify from "./Modify";

export default function App() {
  const [Name, setName] = useState("Pooja");
  const [age, setAge] = useState("15");

  return (
    <center>
      <div className="outer-div">
        <Header name={Name} age={age} setName={setName} />

        <div className="inner-div">
          <p>Name: {Name}</p>
          <p> Age: {age}</p>

        </div>
        <Modify name={Name} age={age} setName={setName} setAge={setAge} />
      </div>
    </center>
  );
}
