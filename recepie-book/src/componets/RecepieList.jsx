import React from "react";
import recepieBook from "../../data/data.json";
import Recepie from "./Recepie";

function RecepieList() {
  return (
    <div className="container">
      <div className="recepie-list">
        {recepieBook.map((recepie) => {
          return <Recepie recepie={recepie} />;
        })}
      </div>
    </div>
  );
}

export default RecepieList;
