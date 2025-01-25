import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

const Home = ({ search, category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((out) => setData(out.products))
      .catch((error) => console.error(error));
  }, []);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home">
      {filteredData.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/card/${item.id}`}>
            <div className="img">
              <img src={item.thumbnail} alt={item.title} />
            </div>
          </Link>
          <div className="details">
            <h1>{item.title}</h1>
            <h3>${item.price}</h3>
            <p>Discount up to {item.discountPercentage}%</p>
            <p>Rating {item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
