import React from "react";
import "../Css/Nav.css"

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    E-Kart
                </div>
                <div className="search">
                    <input type="text" placeholder="Search Products"/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="cart">
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;