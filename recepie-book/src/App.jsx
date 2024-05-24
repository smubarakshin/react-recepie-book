

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




function App() {
  const [recepieBook, setRecepieBook]=useState(RecepieBook)
  return (
    <>

    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<DashboardPage recepieBook={recepieBook} setRecepieBook={setRecepieBook}></DashboardPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/About" element={<AboutPage></AboutPage>}></Route>
      <Route path="/EditRecepie/:id" element={<EditRecepiePage recepieBook={recepieBook} setRecepieBook={setRecepieBook}></EditRecepiePage>}></Route>
    </Routes>
    <Sidebar></Sidebar> 

     <Footer />
    
 

    </>
  );
}

export default App;
