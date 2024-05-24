

import Recepie from "./Recepie";

function RecepieList({recepieBook, setRecepieBook}) {
  return (
    <div className="container">
      <div className="recepie-list">
        {recepieBook.map((recepie) => {
          return <Recepie key={recepie.id} recepie={recepie} />;
        })}
      </div>
    </div>
  );
}

export default RecepieList;
