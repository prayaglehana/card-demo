import React from "react";
import "./Card.css";
const Card = ({ deleteCard, editText, id, text, color }) => {
  console.log("data", text);
  const myFunction = (newText) => {
    console.log("hi", newText);
    editText(id, newText);
  };
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {/* <div>{text}</div> */}
      {/* <input
        type="text"
        value={text}
        onChange={(event) => myFunction(event.target.value)}
      /> */}
      <textarea
        id="w3review"
        name="w3review"
        rows="6"
        cols="50"
        onChange={(event) => myFunction(event.target.value)}
      >
        {text}
      </textarea>
      <button onClick={() => deleteCard(id)}>delete</button>
    </div>
  );
};

export default Card;
