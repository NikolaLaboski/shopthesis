// Importing CSS file and images for styling
import "../Footer/Footer.css"
import { Link } from 'react-router-dom';
import Order from "../Assets/order.png"
import Delivery from "../Assets/delivery.png"
import Return from "../Assets/return.png"
import Payment from "../Assets/payment.png"
import instagram_icon from '../Assets/instagram.png'
import x_icon from '../Assets/x.png'
import github_icon from '../Assets/github.png'

const Footer = () => {
  return (
    // Footer container
    <footer className="footer-container">
      {/* Orders section */}
      <div className="orders">
        {/* Order item */}
        <div className="order">
          {/* Delivery icon */}
          <img src={Delivery} alt="delivery-icon" />
          {/* Text */}
          <p>FREE DELIVERY FOR BITOLA & ZONE OVER 80€</p>
        </div>
        {/* Order item */}
        <div className="order">
          {/* Order icon */}
          <img src={Order} alt="order-icon" />
          {/* Text */}
          <p>ALL ORDERS PLACED BEFORE NOON WILL BE SHIP THE SAME DAY</p>
        </div>
        {/* Order item */}
        <div className="order">
          {/* Return icon */}
          <img src={Return} alt="free-return" />
          {/* Text */}
          <p>FREE RETURN</p>
        </div>
        {/* Order item */}
        <div className="order">
          {/* Payment icon */}
          <img src={Payment} alt="secure-payment" />
          {/* Text */}
          <p>SECURE PAYMENTS</p>
        </div>
      </div>
      {/* About Me section */}
      <div className="footer-section">
        {/* Heading */}
        <h3><Link to="/aboutme" className="footer-links">About Me</Link></h3>
        {/* Paragraph */}
        <p><Link to="/aboutme" className="footer-links">Lorem ipsum dolor sit amet, consectetur adipiscing elit ...seemore</Link></p>
      </div> 
      {/* Location section */}
      <div className="footer-section">
        {/* Heading */}
        <h3>Location</h3>
        {/* Paragraph */}
        <p>s. Misleshevo, Struga bb</p>
      </div>
      {/* Products section */}
      <div className="footer-section">
        {/* Heading */}
        <h3>Products</h3>
        {/* List */}
        <ul>
          {/* List items */}
          <li><Link to="/electronics" className="footer-links">Electronics</Link></li>
          <li><Link to="/jewelery" className="footer-links">Jewellery</Link></li>
          <li><Link to="/menclothing" className="footer-links">Men clothing</Link></li>
          <li><Link to="/womenclothing" className="footer-links">Women clothing</Link></li>
        </ul>
      </div>
      {/* Contact section */}
      <div className="footer-section">
        {/* Heading */}
        <h3>Contact</h3>
        {/* Paragraphs */}
        <p>Email: nikola.laboski@outlook.com  </p>
        <p>Phone: 0038972695440 </p>
      </div>
      {/* Follow Me section */}
      <div className="footer-section">
        {/* Heading */}
        <h3>Follow Me</h3>
        {/* Social icons */}
        <div className="social-icons">
          {/* Instagram icon */}
          <a href="https://www.instagram.com/laboski.93/" target="_blank"><img src={instagram_icon}  alt="" /></a>
          {/* Github icon */}
          <a href="https://github.com/NikolaLaboski" target="_blank"><img src={github_icon} alt="" /></a>
          {/* X icon */}
          <a href="https://x.com/lumos_max_imus" target="_blank"><img src={x_icon}  alt="" /></a>
        </div>
      </div>
      {/* Privacy Policy section */}
      <div className="footer-section">
        {/* Heading */}
        <h3>Privacy Policy</h3>
        {/* Privacy policy link */}
        <p>Read our privacy policy</p>
      </div>
    </footer>
  );
};

export default Footer;

