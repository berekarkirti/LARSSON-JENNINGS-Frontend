import React from 'react';
import { FaShippingFast, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import Navbar from "../Components/Navbar";
import ProductImage from "../Components/Productimage";
import SliderComponent from '../Components/SliderComponent';
import ProductGallery from "../Components/ProductGallery";
import Footer from "../Components/Footer";
import "../Styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="Main">

      {/* ----------------------------navbar-part-start */}
      <Navbar />
      {/*----------------------------navbar-part-end */}

      {/*----------------------------front-image-start */}
      <div className="container-fluid front-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 front-content">
            <strong className="letter">SUMMER SALE</strong>
            <p>BUY ONE</p>
            <p>GET ONE <strong>FREE</strong></p>
            <p className="discount"><strong>EXTRA 10% OFF</strong> WITH CODE: SUMMER10</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img src="src/assets/front-one.jpg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/*----------------------------front-image-end */}

      {/*---------------------------- promo-start */}
      <div className="promo-section">
        <div className="d-flex text-center justify-content-around pt-2 flex-wrap">
          <div>
            <FaShippingFast className="promo-icon" />
            <p>Free Shipping Over $100</p>
          </div>
          <div>
            <FaExchangeAlt className="promo-icon" />
            <p>Easy & Free US Exchanges</p>
          </div>
          <div>
            <FaShieldAlt className="promo-icon" />
            <p>2 Year Warranty</p>
          </div>
        </div>
      </div>
      {/*---------------------------- promo-end */}

      {/*----------------------------slider-part-start */}
      <h2 className="slider-part">
        <strong>JUST LAUNCHED</strong><br />
        TRIBECA
        <SliderComponent />
      </h2>
      {/*----------------------------slider-part-end */}

      {/*-----------------------------banner-part-start */}
      <div className="banner">
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
        <div className="banner-text">1 ORDER = 1 TREE PLANTED</div>
      </div>
      {/*-----------------------------banner-part-end */}

      {/*-----------------------------no-gutters-part-start */}
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="product-banner">
              <img src="src\assets\boys-watch.png" alt="Boyfriend Watches" className="img-fluid" />
              <div className="overlay"></div>
              <div className="product-banner-text">
                <h4>BESTSELLING</h4>
                <strong>BOYFRIEND</strong>
                <p>BUY ONE GET ONE</p>
                <a href="#" className="btn shop-now">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="product-banner">
              <img src="src\assets\girls-watch.png" alt="Gold Watches" className="img-fluid" />
              <div className="overlay"></div>
              <div className="product-banner-text">
                <h4>STATEMENT PIECES</h4>
                <strong>GO FOR GOLD</strong>
                <p>BUY ONE GET ONE</p>
                <a href="#" className="btn shop-now">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------statement-part-end */}

      {/*-----------------------------ProductGallery-part-start */}
      <h2 className="slider-part">
        <strong>SUMMER SALE</strong><br />
        BUY ONE GET ONE
        <ProductGallery />
      </h2>
      {/*-----------------------------ProductGallery-part-end */}

      {/*-----------------------------Affirm-banner-start */}
      <div className="Affirm-banner">
        <div className="Affirm-banner-text">
          Pay Later With <b>Affirm.</b> Pay Later With <b>Affirm.</b> Pay Later With <b>Affirm.</b> Pay Later With <b>Affirm.</b> Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>  Pay Later With <b>Affirm.</b>
        </div>
        <div className="Affirm-banner-text">
          Pay Later With<b>Affirm.</b>
        </div>
        <div className="Affirm-banner-text">
          Pay Later With<b>Affirm.</b>
        </div>
      </div>
      {/*-----------------------------Affirm-banner-end */}

      {/*-----------------------------no(2)-gutters-part-start */}
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="product-banner">
              <img src="src\assets\pro-hover-1.jpg" alt="Boyfriend Watches" className="img-fluid" />
              <div className="overlay"></div>
              <div className="product-banner-text">
                <h4>MORE IS MORE</h4>
                <strong>WRIST STACKS</strong>
                <p>BUY ONE GET ONE</p>
                <a href="#" className="btn shop-now">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 p-0">
            <div className="product-banner">
              <img src="src\assets\pro-hover-3.jpg" alt="Gold Watches" className="img-fluid" />
              <div className="overlay"></div>
              <div className="product-banner-text">
                <h4>COMPLETE THE SET</h4>
                <strong>ZODIAC PIECES</strong>
                <p>BUY ONE GET ONE</p>
                <a href="#" className="btn shop-now">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-----------------------------statement-part-end */}

      {/*----------------------------- ProductImage-start*/}
      <ProductImage />
      {/*----------------------------- ProductImage-end*/}

      {/*----------------------------- Footer-start*/}
      <Footer />
      {/*----------------------------- Footer-end*/}

    </div>

  );
};
export default Homepage;
