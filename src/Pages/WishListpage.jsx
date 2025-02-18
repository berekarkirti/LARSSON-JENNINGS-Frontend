import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/WishListpage.css";

const WishListpage = () => {
    const [wishlist, setWishlist] = useState([]);

    const getProduct = () => {
        axios
            .get("http://localhost:3000/Wish-list")
            .then((res) => {
                setWishlist(res.data);
            })
            .catch((error) => {
                console.error("Error fetching wishlist:", error);
            });
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Wishlist Content */}
            <div className="wishlist-container">
                <h1 className="wishlist-title">My wishlist</h1>
                <div className="wishlist-grid">
                    {wishlist.length > 0 ? (
                        wishlist.map((product) => (
                            <div key={product.id} className="wishlist-card">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="wishlist-image"
                                />
                                <div className="wishlist-info">
                                    <h3>{product.title}</h3>
                                    <p>${product.price}</p>
                                    <button
                                        className="move-to-cart-btn"
                                    >
                                        <Link to={`/descriptionpage/${product.id}`} id="Show">
                                            Show
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No items in your wishlist.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default WishListpage;
