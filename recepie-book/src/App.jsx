

import './App.css'
import Navbar from './componets/Navbar'
import Sidebar from './componets/Sidebar'
import { Route, Routes } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Footer from "./componets/Footer";
import DashboardPage from './pages/DashboardPage';
import { useState } from 'react';
import AboutPage from './pages/AboutPage';
import RecepieBook from "../data/data.json";
import EditRecepiePage from './pages/EditRecepiePage';
import ItemDetailsPage from './pages/ItemDetailsPage';




function App() {
  const [recepieBook, setRecepieBook]=useState(RecepieBook)
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<DashboardPage recepieBook={recepieBook} setRecepieBook={setRecepieBook} /> }></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/food/:foodId" element={<ItemDetailsPage recipeBook={recepieBook} />} />
      <Route path="/edit/:recepieId" element={<EditRecepiePage recepieBook={recepieBook} setRecepieBook={setRecepieBook} /> } />
    </Routes>
    <Sidebar></Sidebar> 

     <Footer />
    
 

    </>
  );
}

export default App;
