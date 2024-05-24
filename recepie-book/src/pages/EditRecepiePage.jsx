import React from 'react'
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";




function EditRecepiePage(recepieBook, setRecepieBook) {
    const {recepieId} = useParams()
    const navigate = useNavigate()
    const [recepieToEdit, setRecepieToEdit]=useState(
        recepieBook.find((recepie)=>recepieBook.id===recepieId)
    )
    const handleSubmit=(event)=>{
        event.preventDefault()
        setRecepieBook((prev)=>
        prev.map((recepie)=>{
            if(recepieBook.id===recepieId){
                recepie=recepieToEdit
            }
            return recepie
        }))
        navigate("/")
    }
  return (
    <div>
      
    </div>
  )
}

export default EditRecepiePage
