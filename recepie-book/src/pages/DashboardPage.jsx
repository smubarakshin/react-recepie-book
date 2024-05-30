
import Addrecepie from "../componets/Addrecepie";
import Editrecepie from "../componets/Editrecepie";
import RecepiesList from "../componets/RecepieList";
import { useParams } from "react-router-dom";
import EditRecepiePage from "./EditRecepiePage";

function DashboardPage({recepieBook, setRecepieBook}) {
  
  return (
    <div>
      <RecepiesList recepieBook={recepieBook} setRecepieBook={setRecepieBook}/>
      <Addrecepie recepieBook={recepieBook} setRecepieBook={setRecepieBook}/>
      {/* <EditRecepiePage recepieBook={recepieBook} setRecepieBook={setRecepieBook}/> */}
     
    </div>
  )
}

export default DashboardPage
