// Importing the necessary CSS file and libraries
import "./Navbar.css";
import { useContext, useState } from 'react';
import { ProductContext } from "../../Context/ProductContext";

// Importing assets and components
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

// Defining the functional component for the Navbar
export default function Navbar() {
    // State variables to manage the active menu item, mobile menu visibility, and cart item count
    const [navMenu, setNavMenu] = useState("home");
    const { cartItems } = useContext(ProductContext);
    const cartItemCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle the visibility of the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Rendering the Navbar component
    return (
        <div className="navbar">
            {/* Logo section */}
            <div className="nav-logo">
                {/* Link to the homepage */}
                <Link to="/" style={{ textDecoration: 'none' }} ><p>SHOP GURU</p></Link>
            </div>
            {/* Mobile menu toggle button */}
            <div className="nav-menu-toggle" onClick={toggleMobileMenu}>
                ☰
            </div>
            {/* Navigation menu items */}
            <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
                {/* Home menu item */}
                <li onClick={() => { setNavMenu("home"); toggleMobileMenu(); }}>
                    <Link className="link-style" to="/">HOME</Link>
                    {navMenu === "home" ? <hr /> : <></>}
                </li>
                {/* Electronics menu item */}
                <li onClick={() => { setNavMenu("electronics"); toggleMobileMenu(); }}>
                    <Link className="link-style" to="/electronics">ELECTRONICS</Link>
                    {navMenu === "electronics" ? <hr /> : <></>}
                </li>
                {/* Jewelry menu item */}
                <li onClick={() => { setNavMenu("jewelery"); toggleMobileMenu(); }}>
                    <Link className="link-style" to="jewelery">JEWELLERY</Link>
                    {navMenu === "jewelery" ? <hr /> : <></>}
                </li>
                {/* Men's Clothing menu item */}
                <li onClick={() => { setNavMenu("menclothing"); toggleMobileMenu(); }}>
                    <Link className="link-style" to="menclothing">MEN CLOTHING</Link>
                    {navMenu === "menclothing" ? <hr /> : <></>}
                </li>
                {/* Women's Clothing menu item */}
                <li onClick={() => { setNavMenu("womenclothing"); toggleMobileMenu(); }}>
                    <Link className="link-style" to="womenclothing">WOMEN CLOTHING</Link>
                    {navMenu === "womenclothing" ? <hr /> : <></>}
                </li>
            </ul>
            {/* Login and Cart section */}
            <div className="loginVsCart">
                {/* Link to the login/signup page */}
                <Link to="/signuplogin"><button className="login">Login</button></Link>
                {/* Link to the cart page */}
                <Link to="/cart"><img src={cart_icon} alt="cart icon" /></Link>
                {/* Displaying the cart item count */}
                <div className="cart-counter">{cartItemCount}</div>
            </div>
        </div>
    );
}

