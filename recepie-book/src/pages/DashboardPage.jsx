
import Addrecepie from "../componets/Addrecepie";
import RecepiesList from "../componets/RecepieList";
function DashboardPage({recepieBook, setRecepieBook}) {
  return (
    <div>
      <RecepiesList recepieBook={recepieBook} setRecepieBook={setRecepieBook}/>
      <Addrecepie recepieBook={recepieBook} setRecepieBook={setRecepieBook}/>
    </div>
  )
}

export default DashboardPage
