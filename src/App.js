import React, { useState } from "react";
import Header from "./Header";
import "./App.css";

export default function App() {
  const [state, setState] = useState("Pooja");
  const [age, setAge] = useState("15");

  return (
    <center>
      <div className="outer-div">
        <Header name={"Nandini"} age={20} />
      
      <div className="inner-div">
        <p>Name: {state}</p>

        <p> Age: {age}</p>

        <button
          className="btn"
          onClick={() => {
            setState("Nandini");
          }}
        >
          Set Name
        </button>

        <button
          className="btn"
          onClick={() => {
            setAge("20");
          }}
        >
          Set Age
        </button>
      </div>
      </div>
    </center>
  );
}
