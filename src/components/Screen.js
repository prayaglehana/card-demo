import React, { useState } from "react";
import { createContext, useEffect } from "react/cjs/react.production.min";
import Card from "./Card.js";

const initializeCards = () => {
  var arrStr = localStorage.getItem("cards");

  //   const arr = [
  //     {
  //       id: 0,
  //       text: "watch movies",
  //       color: "red",
  //     },
  //     {
  //       id: 1,
  //       text: "complete project",
  //       color: "green",
  //     },
  //   ];

  return JSON.parse(arrStr);
};
const colors = ["red", "green", "yellow", "blue"];

const Screen = () => {
  const [cards, setCards] = useState(() => initializeCards());
  const [counter, setCounter] = useState(2);

  const createNote = () => {
    const arr = cards != null ? [...cards] : [];
    arr.push({
      id: counter,
      text: "Enter text",
      color: colors[Math.floor(Math.random() * 3 + 1)],
    });
    localStorage.setItem("cards", JSON.stringify(arr));
    setCards(arr);
    setCounter(counter + 1);
  };

  const getIdx = (arr, id) => {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].id == id) {
        return i;
      }
    }
  };

  const editText = (id, text) => {
    const arr = [...cards];
    const idx = getIdx(arr, id);

    arr[idx].text = text;
    setCards(arr);
    localStorage.setItem("cards", JSON.stringify(arr));
  };

  const deleteCard = (id) => {
    const arr = [...cards];
    const idx = getIdx(arr, id);
    arr.splice(idx, 1);
    setCards(arr);
    localStorage.setItem("cards", JSON.stringify(arr));
  };

  return (
    <div>
      <button onClick={() => createNote()}>New Note</button>
      {cards != null
        ? cards.map((card, idx) => {
            console.log("card", card);
            return (
              <div
                style={{
                  color: `${card.color}`,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Card
                  id={card.id}
                  deleteCard={deleteCard}
                  editText={editText}
                  text={card.text}
                  color={card.color}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Screen;
