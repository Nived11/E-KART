import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Order from "./Components/order";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems} setSearch={setSearch} setCategory={setCategory} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} search={search} category={category} />}
        />
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
