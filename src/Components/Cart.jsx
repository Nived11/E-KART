import React from "react";
import "../Css/Cart.css";

const Cart = () => {
  return (
    <div className="cart-page">
      <h1 className="head">Your  Cart</h1>
     <div className="cart-container">
        <div className="cart-lft">
            <div className="cart-card">
                <div className="cart-img">
                    <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" />
                </div>
                <div className="cart-details">
                   <div className="cart-det"> 
                        <h1>Product Name</h1>
                        <h3>$1888</h3>
                        <p>Seller</p>
                        <p>details </p>
                        <p>Qty  
                            <select className="qtyval" name="" id=""> 
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">6</option>
                                <option value="">7</option>
                                <option value="">8</option>
                                <option value="">9</option>
                                <option value="">10</option>
                            </select>
                            <div className="remove"><p>Remove</p></div>
                        </p>
                    </div>
                </div>
            </div>

            

        </div>
            <div className="cart-rgt">

                                <div className="billing-slip">
                        <h1 className="title">Billing Slip</h1>
                        <div className="content">
                            <div className="product-details">
                            <p><strong>Discount Amount:</strong> $50.00</p>
                            <p><strong>Total Amount:</strong> $450.00</p>
                            </div>
                            <div className="offers">
                            <h3>Other Offers:</h3>
                            <ul>
                                <li>Free shipping on orders over $100</li>
                                <li>10% off on next purchase</li>
                            </ul>
                            </div>
                            <div className="place-order"><p>Place Order</p></div>
                        </div>
                        </div>
            </div>

     </div>
    </div>
  );
};

export default Cart;
