import React from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";

const Nav = ({ cartItems }) => {
  return (
    <>
    <nav>
      <div className="container">
        <div className="logo">ZyreX</div>
        <div className="search">
          <input type="text" placeholder="Search Products" />
        </div>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Product</Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="cart">
          <Link to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
            <span>{cartItems.length===0 ? "" : cartItems.length}</span> 
          </Link>
        </div>
      </div>
    </nav>
    <div className="secnav">
      <ul>
        <li>Beauty</li>
        <li>Furniture</li>
        <li>Smartphones</li>
        <li>Laptops</li>
        <li>Fashion</li>
        <li>Grocery</li>
        <li>Appliances</li>
        <li>Toys</li>
      </ul>
    </div>
    </>
  );
};

export default Nav;
