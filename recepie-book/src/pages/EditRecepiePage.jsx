import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Editrecepie from '../componets/Editrecepie';
// import RecepieBook from "../../data/data.json"; not needed beacause you already have the data in props

{/* <Route path="/edit/:recepieId" element={<EditRecepiePage recepieBook={recepieBook} setRecepieBook={setRecepieBook} /> } /> */}



function EditRecepiePage({recepieBook, setRecepieBook}) {
    const {recepieId} = useParams()
    const navigate = useNavigate()
    // recepieId
    const [recepieToEdit, setRecepieToEdit]=useState(
        recepieBook.find((recepie)=>recepie.id===recepieId)
    )

    console.log(recepieToEdit)
    const handleSubmit=(event)=>{
        event.preventDefault()
        setRecepieBook((prev)=>
        prev.map((recepie)=>{
            if(recepie.id===recepieId){
                recepie=recepieToEdit
            }
            return recepie
        }))
        navigate("/")
    }
  return (
    <div>
    <div>
   <form onSubmit={handleSubmit} className="recepieForm">
     <span>ADD RECEPIE</span>
     <div>
     <label>
         Name
         <input   value={recepieToEdit.name} name="name" type="text" placeholder="Dish Name" 
         onChange={(e) => setRecepieToEdit(prev => ({...prev, [e.target.name]: e.target.value}))}/>
      
       </label>
       <label>
         Calories
         <input name="calories" type="number" placeholder="0" 
         value={recepieToEdit.calories}
         onChange={(e) => setRecepieToEdit(prev => ({...prev, [e.target.name]: e.target.value}))}/>
       </label>
       <label>
         Image
         <input name="image" type="url" placeholder="set Image" value={recepieToEdit.image}
         onChange={(e) => setRecepieToEdit(prev => ({...prev, [e.target.name]: e.target.value}))}/>
       </label>
       <label>
         Servings
         <input name="servings" type="number" placeholder="1" 
         value={recepieToEdit.servings}
         onChange={(e) => setRecepieToEdit(prev => ({...prev, [e.target.name]: e.target.value}))}/>
       </label>
       <button type="submit">Add Recepie</button>
     </div>
   </form>

 </div>
 </div>
  )
}

export default EditRecepiePage
