import React from "react";

export default function Recepie({ recepie }) {
  return (
    <div className="recepie-container">
      <div className="image-container">
        <img src={recepie.image} alt="No Image" className="recepieImg" />
        </div>
        <div className="dish-items">
        <h2 className="item">Dish name: {recepie.name}</h2>
        <h2 className="item">Calorie Content: {recepie.calories}</h2>
        <h2 className="item">Servings per person: {recepie.servings}</h2>
        </div>
      </div>
  );
}
