

import { useState } from 'react';
import {v4 as uuid} from "uuid"

function Addrecepie({recepieBook, setRecepieBook}) {
  

const [name ,setName]=useState("")
const [calories ,setCalories]=useState(0)
const [image ,setImage]=useState("")
const [servings ,setServings]=useState(1)

const handleSubmit = (event)=>
{
    event.preventDefault()
    const newRecepie={
        id: uuid(),
      name,
      calories,
      image,
      servings
}
setRecepieBook((prev)=>[newRecepie, ...prev])

}
  return (
    <div>
      <form onSubmit={handleSubmit} className="recepieForm">
        <span>ADD RECEPIE</span>
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
          <button type="submit">Add Recepie</button>
        </div>
      </form>

    </div>
    
  )
}

export default Addrecepie
