import React from "react";
import "../Css/Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <>
     
            <nav>
                <div className="container">
                    <div className="logo">
                        E-Kart
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search Products"/>
                    </div>
                    <ul>
                        <Link to={"/"}>Home </Link>
                        <li>Product</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className="cart">
                        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                         Cart
                    </div>
                </div>
            </nav>
            <div className="secnav">
                <ul>
                    <li>Beauty</li>
                    <li>Electronics</li>
                    <li>Fragrances</li>
                    <li>Smartphones</li>
                    <li>Tablets</li>
                    <li>sunglasses</li>
                    <li>Shirts</li>
                    <li>Tops</li>
                    <li>Vehicle</li>
                    <li>Shoes</li>
                    <li>Furniture</li>
                </ul>
            </div>
        </>
    );
};

export default Nav;