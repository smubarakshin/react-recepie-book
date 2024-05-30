
import { useState } from "react"
import { useParams, Link } from "react-router-dom"
function ItemDetailsPage({recipeBook}) {
  const {foodId}= useParams()
  const [recipe, setRecipe] = useState(recipeBook.find(food => food.id === foodId))
  return (
    <div className="recepie-container">
    <div className="image-container">
      <img src={recipe.image} alt="No Image" className="recepieImg" />
      </div>
      <div className="dish-items">
      <h2 className="item">Dish name: {recipe.name}</h2>
      <h2 className="item">Calorie Content: {recipe.calories}</h2>
      <h2 className="item">Servings per person: {recipe.servings}</h2>
      <Link to={`/editrecepie/${recipe.id}`}><button>edit recepie</button></Link>
      </div>
    </div>
  )
}

export default ItemDetailsPage
