import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import '../Styles/Descriptionpage.css';
import { useCart } from '../context/CartProvider';

const Descriptionpage = () => {
    const { id } = useParams();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); 

    useEffect(() => {
        axios.get(`https://larsson-jennings-backend.onrender.com/Sale-product/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    const handleArrowClick = () => {
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            alert('Product has been added to the cart!');
        }
    };
    
    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {/* ----------------------------navbar-part-start */}
            <Navbar />
            {/*----------------------------navbar-part-end */}

            {/* ----------------------------description-part-start */}
            <div className="container-fluid" style={{ marginTop: '8%' }}>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <img src={product.img} alt={product.title} className="img-fluid custom-img" />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                        <img src={product.hoverimg} alt={product.title} className="img-fluid custom-img" />
                    </div>
                    <div className="col-lg-4 col-md-12" >
                        <div className="trustpilot d-flex align-items-center mb-2">
                            <span style={{ color: 'green', fontWeight: '600' }}>Trustpilot</span><br />
                            <span className="ml-2" style={{ fontSize: '14px', color: '#000' }}><b>⭐</b>Rated 4.4/5 stars</span>
                        </div>
                        <h2 className="product-title">{product.title}</h2>
                        <div className="price mb-2">
                            <span className="discounted-price">$289 USD</span>
                            <span className="original-price">{product.price}</span>
                        </div>
                        <button className="btn btn-dark btn-block mb-2" onClick={handleAddToCart}>ADD TO CART</button>
                        <button className="btn btn-primary btn-block mb-4">Buy with ShopPay</button>
                        <div className="payment-options mb-4">
                            <a href="#">MORE PAYMENT OPTIONS</a>
                        </div>
                        <ul className="features">
                            <li>EASY & FREE USA RETURNS</li>
                            <li>FREE SHIPPING WORLDWIDE OVER $100</li>
                            <li>2 YEAR WARRANTY</li>
                            <li>1 ORDER = 1 TREE PLANTED</li>
                            <li>1% DONATED FROM EVERY ORDER</li>
                        </ul>
                        <div className="additional-details">
                            <h5 onClick={handleArrowClick}>DETAILS <span><FaArrowRight /></span></h5>
                            <h5 onClick={handleArrowClick}>SIZE GUIDE <span><FaArrowRight /></span></h5>
                            <h5 onClick={handleArrowClick}>DELIVERY <span><FaArrowRight /></span></h5>
                            <h5 onClick={handleArrowClick}>WARRANTY <span><FaArrowRight /></span></h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------description-part-end */}

            {/*----------------------------- Footer-start*/}
            <Footer />
            {/*----------------------------- Footer-end*/}

            <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
        </div>
    );
};

export default Descriptionpage;
