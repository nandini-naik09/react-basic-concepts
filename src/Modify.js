import React from "react";

export default function Modify({ name, age, setName, setAge }) {
  return (
    <div>
         <br/>
      <button
        className="btn"
        onClick={() => {
          setName("Nandini");
        }}
      >
        Set Name
      </button>
      <button
        className="btn"
        onClick={() => {
          setName("Pooja");
        }}
      >
        Reset Name
      </button> <br/>
      <button
        className="btn"
        onClick={() => {
          setAge("20");
        }}
      >
        Set Age
      </button>

      <button
        className="btn"
        onClick={() => {
          setAge("15");
        }}
      >
        Reset Age
      </button>
    </div>
  );
}
