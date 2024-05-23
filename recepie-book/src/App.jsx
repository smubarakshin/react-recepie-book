
import './App.css'
import Navbar from './componets/Navbar'
import Sidebar from './componets/Sidebar'
import { Route, Routes } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';

function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      <Route path="/About" element={<AboutPage></AboutPage>}></Route>
    </Routes>
    {/* <Footer></Footer> */}
    <Sidebar></Sidebar> 

 
    </>
  )
}

export default App
