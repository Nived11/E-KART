import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/Cart.css";

const Cart = ({ cartItems, removeFromCart, handleQuantityChange, setCartItems }) => {
  const navigate = useNavigate(); // For navigation
  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle place order
  const handlePlaceOrder = () => {
    // Clear cart data from localStorage and state
    localStorage.removeItem("cartItems");
    setCartItems([]); // Clear the cart state
    // Navigate to the order success page
    navigate("/order");
  };

  return (
    <div className="cart-page">
      <h1 className="head">{cartItems.length===0 ? "" : "Your Cart"}</h1>
      <div className="cart-container">
        <div className="cart-lft">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <div className="cart-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="cart-details">
                  <div className="cart-det">
                    <h1>{item.title}</h1>
                    <h3>${item.price}</h3>
                    <p>Seller</p>
                    <p>Details</p>
                    <div className="quantity-and-remove">
                      <span>Qty</span>
                      <select className="qtyval" value={item.quantity} onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)}>
                        {[...Array(10)].map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                      <div className="remove" onClick={() => removeFromCart(item.id)}>
                        <span>Remove</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="cart-empty-container">
              <div className="cart-empty-icon">🛒</div>
              <p className="cart-empty-message">Oops! Your cart is empty.</p>
              <p>But don't worry, we have plenty of exciting items waiting for you!</p>
              <div className="cart-empty-button" onClick={() => navigate('/')}>Start Shopping</div>
          </div>

          )}
        </div>

        {/* Show billing section only if cartItems is not empty */}
        {cartItems.length > 0 && (
          <div className="cart-rgt">
            <div className="billing-slip">
              <h1 className="title">Billing Slip</h1>
              <div className="content">
                <div className="product-details">
                  <p>
                    <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
                  </p>
                </div>
                <div className="place-order" onClick={handlePlaceOrder}>
                  <p>Place Order</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
