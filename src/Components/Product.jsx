import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Css/Product.css";

const Product = ({ addToCart }) => {
  const { id } = useParams(); // Extract product ID from the URL
  const [product, setProduct] = useState(null); // Store a single product
  const [isAddedToCart, setIsAddedToCart] = useState(false); // Track if product is added to the cart
  const navigate = useNavigate(); // For navigation to Cart page

  // Fetch product data from API
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((out) => setProduct(out))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  // Handle loading page...
  if (!product) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading product details...</h2>
      </div>
    );
  }

  // Handle Add to Cart action
  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    setIsAddedToCart(true); // Mark the product as added to cart
  };

  // Handle navigating to Cart page
  const handleGoToCart = () => {
    navigate("/cart"); // Navigate to the Cart page
  };

  // Handle Buy Now action
  const handleBuyNow = () => {
    addToCart(product); // Add product to cart
    navigate("/cart"); // Navigate to the Cart page to initiate checkout
  };

  return (
    <div className="productcontainer">
      <div className="lftcontainer">
        <div className="image">
          <img src={product.images || product.thumbnail} alt={product.title} />
        </div>
        <div className="subimages">
          {[...Array(4)].map((_, index) => (
            <div className="pieces" key={index}>
              <img src={product.thumbnail} alt={`${product.image} - ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="rgtcontainer">
        <h1>{product.title}</h1>
        <h3>${product.price}</h3>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>

        <div className="buttondiv">
          <button className="buy" onClick={handleBuyNow}>
            Buy Now
          </button>

          {!isAddedToCart ? (
            <button className="addcart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          ) : (
            <button className="goToCart" onClick={handleGoToCart}>
              Go to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
