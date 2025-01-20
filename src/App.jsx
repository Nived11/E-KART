import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Order from "./Components/order";


function App() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from localStorage when the app starts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add product to the cart
  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product is already in the cart, increase the quantity
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Update the product quantity in the cart
  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/card/:id" element={<Product addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              removeFromCart={removeFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          }
        />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
