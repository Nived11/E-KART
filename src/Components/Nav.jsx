import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";

const Nav = ({ cartItems, setSearch, setCategory }) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        if (res.ok) {
          const fetchedCategories = await res.json();
          setCategories(fetchedCategories); 
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="logo">ZyreX</div>
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Products"
          />
        </div>
        <ul>
          <Link to="/">Home</Link>
          <li>About</li>
          <li>Contact</li>
          <li>
  <select
    name="categories"
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="All">All Categories</option>
    {categories.length > 0 ? (
      categories.map((category, index) => {
        const categoryName = typeof category === "string" ? category : category.name;
        return (
          <option key={index} value={categoryName}>
            {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
          </option>
        );
      })
    ) : (
      <option disabled>Loading...</option>
    )}
  </select>
</li>

        </ul>
        <div className="cart">
          <Link to="/cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              alt="cart"
            />
            <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
