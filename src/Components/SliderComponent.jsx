import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SliderComponent.css';

const products = [
    {
        id: 1,
        image: 'src/assets/main-1.jpg',
        hoverImage: 'src/assets/ho-1.jpg',
        title: 'Tribeca Mixed Gold Green 24mm',
        price: '$299.00 USD',
    },
    {
        id: 2,
        image: 'src/assets/main-2.jpg',
        hoverImage: 'src/assets/ho-2.jpg',
        title: 'Tribeca Mixed Gold White 24mm',
        price: '$299.00 USD',
    },
    {
        id: 3,
        image: 'src/assets/main-3.jpg',
        hoverImage: 'src/assets/ho-3.jpg',
        title: 'Tribeca Gold White 24mm',
        price: '$299.00 USD',
    },
    {
        id: 4,
        image: 'src/assets/main-4.jpg',
        hoverImage: 'src/assets/ho-4.jpg',
        title: 'Tribeca Silver White 24mm',
        price: '$299.00 USD',
    },
];

const SliderComponent = () => {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="image-container">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <img src={product.hoverImage} alt={product.title} className="product-hover-image" />
                        <div className="new-in-text ">
                            <span> NEW IN </span>
                            <span> NEW IN </span>
                            <span> NEW IN </span>
                            <span> NEW IN </span>
                            <span> NEW IN </span>
                            <span> NEW IN </span>
                        </div>
                    </div>
                    <div className="product-info">
                        <p>{product.title}</p>
                        <p><b>{product.price}</b></p>
                    </div>
                    <div className="thumbnails">
                        {products.map((product) => (
                            <img
                                key={product.id}
                                src={product.image}
                                alt={product.title}
                                className={`thumbnail ${selectedProduct.id === product.id ? 'selected' : ''}`}
                               
                            />
                        ))}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default SliderComponent;
