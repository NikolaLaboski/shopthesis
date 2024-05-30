import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '../Pages/Home';
import Category from '../Pages/Category';
import Product from "../Pages/Product"
import Cart from '../Pages/Cart';
import SignUpLogin from '../Pages/SignUpLogin';
import AboutMe from '../Pages/AboutMe';
import Footer from '../Components/Footer/Footer';
import banner_men from "../Components/Assets/banner_men.png"
import banner_women from "../Components/Assets/banner_women.png"
import banner_electronics from "../Components/Assets/banner_electronics.png"
import banner_jewellery from "../Components/Assets/banner_jewellery.png"

function App() {
  
  return (
    <>
      <BrowserRouter>
        
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/electronics" element={<Category banner={banner_electronics} category="electronics"/>}/>
          <Route path="/jewelery" element={<Category banner={banner_jewellery} category="jewelery"/>}/>
          <Route path="/menclothing" element={<Category banner={banner_men} category="men's clothing"/>}/>
          <Route path="/womenclothing" element={<Category banner={banner_women} category="women's clothing"/>}/>
          <Route path="/signuplogin" element={<SignUpLogin />} />
          <Route path="/product/:productId" element={<Product />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/aboutme' element={<AboutMe/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      

    </>
  )
}

export default App;
