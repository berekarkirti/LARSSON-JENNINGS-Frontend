import React from "react";
import "../Styles/ProductGallery.css";

const ProductGallery = () => {
    const things = [
        {
            id: 1,
            name: "Boyfriend Mini Elevate Mixed Gold 31mm",
            price: "$278.00 USD",
            image: "https://larssonjennings.com/cdn/shop/files/Boyfriend_Mini_Elevate_mixedgold1copy_2_1080x.png?v=1710314275",
            hoverImage: "https://larssonjennings.com/cdn/shop/files/elevated_-29_cf5250be-065c-4c30-8209-77a898c64b7b_460x.jpg?v=1722507538",
        },
        {
            id: 2,
            name: "Zodiac Necklace Aries 18ct Gold Plated",
            price: "$98.00 USD",
            image: "https://larssonjennings.com/cdn/shop/files/Untitleddesign_5_460x.png?v=1722505965",
            hoverImage: "https://larssonjennings.com/cdn/shop/files/zodiac_onmodel_web_def726dc-d548-4404-a6ca-14023be601a4_460x.jpg?v=1722505965",
        },
        {
            id: 3,
            name: "Boyfriend Classic Mixed Gold 40mm",
            price: "$279.00 USD",
            image: "https://larssonjennings.com/cdn/shop/files/BOYFRIENDMIXEDGOLD_9fb1b437-e386-4480-b309-c80260725d92_460x.png?v=1722509486",
            hoverImage: "https://larssonjennings.com/cdn/shop/files/elevated_-8_460x.jpg?v=1722509486",
        },
        {
            id: 4,
            name: "Birthstone Bracelet April 18ct Gold Plated",
            price: "$129.00 USD",
            image: "https://larssonjennings.com/cdn/shop/files/Untitleddesign_34_460x.png?v=1722505714",
            hoverImage: "https://larssonjennings.com/cdn/shop/files/Birtstone_April_Aries_4_7f63cd92-0755-4b5c-be54-82de57caae70_460x.jpg?v=1722505714",
        },
    ];

    return (
        <div className="productgallery-container">
            <div className="productgallery">
                {things.map((things) => (
                    <div className="productgallery-card " key={things.id}>
                        <div className="productgallery-image">
                            <img
                                src={things.image}
                                alt={things.name}
                                className="productgallery-main-image"
                            />
                            <img
                                src={things.hoverImage}
                                alt={things.name}
                                className="productgallery-hover-image"
                            />
                        </div>
                        <div className="productgallery-info mt-5">
                            <p className="productgallery-name">{things.name}</p>
                            <p className="productgallery-price"><b>{things.price}</b></p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="productgallery-shop-all">SHOP ALL</button>
        </div>
    );
};

export default ProductGallery;