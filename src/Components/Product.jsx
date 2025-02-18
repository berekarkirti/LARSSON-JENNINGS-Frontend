import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Product.css';
import { FaHeart } from 'react-icons/fa';

const Product = ({ sortOption, category }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const getDataFromServer = () => {
        axios.get('https://larsson-jennings-backend.onrender.com/Sale-product')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, []);

    useEffect(() => {
        let updatedProducts = [...products];

        if (category) {
            updatedProducts = updatedProducts.filter(product => product.category === category);
        }

        if (sortOption) {
            switch (sortOption) {
                case 'Alphabetically: A-Z':
                    updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'Alphabetically: Z-A':
                    updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                case 'Price: Low To High':
                    updatedProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, "")));
                    break;
                case 'Price: High To Low':
                    updatedProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - parseFloat(a.price.replace(/[^0-9.-]+/g, "")));
                    break;
                default:
                    break;
            }
        }

        setFilteredProducts(updatedProducts);
    }, [sortOption, category, products]);

    const handleLikeClick = (product) => {
        axios.post("https://larsson-jennings-backend.onrender.com/Wish-list", product)

            .then((res) => {
                // console.log(res.data);
                setWishlist(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="container-fluid" style={{ overflowX: 'hidden' }}>
            <div className="row">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
                        <div className="card productpage-product-card w-100 h-100 p-0">
                            <Link to={`/descriptionpage/${product.id}`} className="text-decoration-none">
                                <div className="product-image-container">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="product-image"
                                    />
                                    <img
                                        src={product.hoverimg}
                                        alt={product.title}
                                        className="product-image-alt"
                                    />
                                </div>
                            </Link>
                            <div className="card-body text-center p-0 mt-5">
                                <button
                                    onClick={() => handleLikeClick(product)}
                                    className={`like-btn ${Array.isArray(wishlist) && wishlist.includes(product) ? 'unlik' : 'like'}`}
                                    aria-label="Like">
                                    <FaHeart color={Array.isArray(wishlist) && wishlist.includes(product) ? 'red' : ''} style={{ transition: 'color 0.3s ease, border-color 0.3s ease', }} />
                                </button>
                                <h5 className="product-title">{product.title}</h5>
                                <p className="product-price">{product.price}</p>
                                <p className="product-category">{product.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
