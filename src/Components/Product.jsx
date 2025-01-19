import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/Product.css";

const Product = () => {
    const { id } = useParams(); // Extract product ID from the URL
    const [product, setProduct] = useState(null); // Store a single product

    useEffect(() => {
        // Fetch the specific product using the ID
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((out) => setProduct(out))
            .catch((err) => console.error("Error fetching product:", err));

        // Cleanup function (if needed)
        return () => {
            console.log("Unmounting");
        };
    }, [id]);

    // Handle loading state
    if (!product) {
        return  <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading product details...</h2>
    </div>
    }

    return (
        <div className="productcontainer">
            {/* Left Container */}
            <div className="lftcontainer">
                <div className="image">
                    <img src={product.images||product.thumbnail} alt={product.title} />
                </div>
                <div className="subimages">
                {[...Array(4)].map((_, index) => (
                        <div className="pieces" key={index}>
                            <img src={product.thumbnail} alt={`${product.title} - ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Container */}
            <div className="rgtcontainer">
                <h1>{product.title}</h1>
                <h3>${product.price}</h3>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Rating: {product.rating}</p>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <div className="buttondiv">
                    <button className="buy">Buy Now</button>
                    <button className="addcart">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
