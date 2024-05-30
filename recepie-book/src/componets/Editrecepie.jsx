import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Editrecepie({recepieBook, setRecepieBook}) {
  // const [recepieBook, setRecepieBook]=useState("")
const {Id}=useParams()
const navigate = useNavigate();

const [recepieToEdit, setRecepieToEdit]= useState(
  recepieBook.find((recepie) => recepie.id===Id)
)



const handleSubmit = (event)=>
{
    event.preventDefault()
    setRecepieBook((prev) =>
      prev.map((recepie) => {
        if (recepie.id === Id) {
          recepieBook = recepieToEdit;
        }
        return recepie;
      })
    );
  }
  return (
    <div>
       <div>
      <form onSubmit={handleSubmit} className="recepieForm">
        <span>Edit RECEPIE</span>
        <div>
        <label>
            Name
            <input name="Name" type="text" placeholder="Dish Name" 
            onChange={(event) => setName(event.target.value)}/>
          </label>
          <label>
            Calories
            <input name="calories" type="number" placeholder="0" 
            value={calories}
            onChange={(event) => setCalories(event.target.value)}/>
          </label>
          <label>
            Image
            <input name="image" type="url" placeholder="set Image" 
            onChange={(event) => setImage(event.target.value)}/>
          </label>
          <label>
            Servings
            <input name="servings" type="number" placeholder="1" 
            value={servings}
            onChange={(event) => setServings(event.target.value)}/>
          </label>
          <button type="submit">Edit Recepie</button>
        </div>
      </form>

    </div>
    </div>
  )
}

export default Editrecepie
