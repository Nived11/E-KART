import React from "react";
import "../Css/Order.css"; // Ensure styles are added here
import { Link } from "react-router-dom";
import truck  from "../assets/truck.png";
const Order = () => {
  return (
    <div className="order-success">
      <div className="truck-animation-container">
        <div className="truck">
            <img src={truck} alt="truck" />
        </div>
        
      </div>
      <div className="order-container">
        <h1 className="order-title">Order Successfully Placed!</h1>
        <p className="order-message">Thank you for your order. Your items will be shipped soon!</p>
        <Link to="/" className="go-home-link">Go to Home</Link>
      </div>
    </div>
  );
};

export default Order;

