import logo from './logo.svg';
import './App.css';
import NavbarNew from "./Components/Navbar/NavbarNew";
import Curousel from "./Components/HomePage/Carousel"
import HomeServices from "./Components/HomePage/HomeServices"
import Projects from "./Components/HomePage/Projects"
import Form from "./Components/Contact Us/Form"
import Footer from "./Components/Footer/Footer"
import AboutUs from './Components/About Us/AboutUs';
import Services  from './Components/Services/WebDevelopment';
import Pharmacy from './Components/PortFolio/Pharmacy';
import FoodDelevery from './Components/PortFolio/FoodDelevery';
import ECommercePortfolio from './Components/PortFolio/ECommercePortfolio';
import InstagramCloneSection from './Components/PortFolio/InstagramCloneSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import PortFolioRoute from './Components/PortFolio/PortFolioRoute';
import WebDevelopment from './Components/Services/WebDevelopment';
import FullStackDevelopment from './Components/Services/FullStackDevelopment';
import WebDesign from './Components/Services/WebDesign';


function App() {
  return (
   

    <BrowserRouter>

    <NavbarNew/>

   <Routes>

    <Route path='/'element={<HomePage/>}></Route>
    <Route path='/AboutUs'element={<AboutUs/>}></Route>
    <Route path='/Services'element={<Services/>}></Route>
    <Route path='/Portfolio'element={<PortFolioRoute/>}></Route>
    <Route path='/ContactUs'element={<Form/>}></Route>
    <Route path="/WebDevelopment" element={<WebDevelopment />} />
    <Route path="/FullStackDevelopment" element={<FullStackDevelopment/>} />
    <Route path="/WebDesign" element={<WebDesign/>} />
    
    </Routes> 

   <Footer/> 
    </BrowserRouter>
   
  );
}

export default App;
