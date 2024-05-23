import "./App.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Sidebar from "./componets/Sidebar";
import RecepiesList from "./componets/RecepieList";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <RecepiesList />
      <Footer />
    </>
  );
}

export default App;
