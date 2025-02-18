import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Styles/Productpage.css';
import Product from '../Components/Product';

const Productpage = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [sortOption, setSortOption] = useState('');
    const [category, setCategory] = useState('');  
    const handleToggleOffCanvas = () => {
        setShowOffCanvas(!showOffCanvas);
    };

    const handleSort = (option) => {
        setSortOption(option);
        setShowOffCanvas(false);
    };

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    return (
        <div>
            <Navbar />
            <hr />

            <div className="container-fluid">
                <div className="banner" style={{ marginLeft: '43%', marginTop: '11%' }}>
                    <h1>SUMMER SALE
                        <p>UP TO 40% OFF!</p>
                    </h1>
                </div>
            </div>

            <div className="container-fluid product-page">
                <div className="row m-auto">
                    <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
                        <button className="btn category-button mx-2 my-2" onClick={() => handleCategoryClick('Watches')}>Watches</button>
                        <button className="btn category-button mx-2 my-2" onClick={() => handleCategoryClick('Jewelry')}>Jewelry</button>
                        <button className="btn category-button mx-2 my-2" onClick={() => handleCategoryClick('Straps')}>Straps</button>
                        <button className="btn category-button mx-2 my-2" onClick={() => handleCategoryClick('Gift Cards')}>Gift Cards</button>
                        <button className="btn category-button mx-2 my-2" onClick={() => handleCategoryClick('Spring Sale')}>Spring Sale</button>
                        <button
                            className="btn category-button mx-2 my-2"
                            onClick={handleToggleOffCanvas}
                        >
                            Sort / Filter +
                        </button>
                    </div>
                </div>
            </div>

            <Product sortOption={sortOption} category={category} />

            <div className={`offcanvas offcanvas-end ${showOffCanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasExampleLabel">Filter Options</h5>
                    <button type="button" className="btn-close" onClick={handleToggleOffCanvas} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="filter-section">
                        <h6>SORT BY</h6>
                        <div className="filter-options">
                            <button onClick={() => handleSort('Alphabetically: A-Z')}>Alphabetically: A-Z</button>
                            <button onClick={() => handleSort('Alphabetically: Z-A')}>Alphabetically: Z-A</button>
                            <button onClick={() => handleSort('Price: Low To High')}>Price: Low To High</button>
                            <button onClick={() => handleSort('Price: High To Low')}>Price: High To Low</button>
                            <button onClick={() => handleSort('Date: New To Old')}>Date: New To Old</button>
                            <button onClick={() => handleSort('Date: Old To New')}>Date: Old To New</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Productpage;
