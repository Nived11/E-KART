import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Css/Home.css";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((out) => {
                setData(out.products);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <>
            <div className="home">
                {data.map((item) => (
                    <Link to={`/card/${item.id}`} key={item.id}>
                        <div className="card">
                            <div className="img">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="details">
                                <h1>{item.title}</h1>
                                <h3>${item.price}</h3>
                                <p>Discount up to {item.discountPercentage}%</p>
                                <p>Rating {item.rating}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Home;
