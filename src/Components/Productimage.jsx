// import React from 'react';
// import "../Styles/ProductImage.css"; 

// const ImageCard = ({ src, alt, text }) => (
//   <div className="col-12 col-sm-6 col-md-6 col-lg-3">
//     <div className="image-card">
//       <img src={src} alt={alt} className="img-fluid" />
//       <div className="overlay">
//         <div className="text">{text}</div>
//       </div>
//     </div>
//   </div>
// );

// const ProductImage = () => {
//     return (
//     <div>
//       <div className="productimage-title">
//           <h3>FOLLOW THE MOVEMENT</h3>
//           <p>@larssonjennings</p>
//       </div>
//       <div className="container-fluid">
//         <ImageCard src="src\assets\productimage-1.jpeg" alt="Watch 1" text="SHOP THIS LOOK →" />
//         <ImageCard src="src\assets\productimage-2.jpeg" alt="Jewelry" text="SHOP THIS LOOK →" />
//         <ImageCard src="src\assets\productimage-3.jpeg" alt="Watch 2" text="SHOP THIS LOOK →" />
//         <ImageCard src="src\assets\productimage-4.jpeg" alt="Watches Collection" text="SHOP THIS LOOK →" />
//       </div>
//       <div className="load-more-container">
//         <button className="load-more-button">LOAD MORE</button>
//       </div>
//     </div>
//     );
//   }
 
//   export default ProductImage

import React from 'react';
import "../Styles/ProductImage.css"; 

const ImageCard = ({ src, alt, text }) => (
  <div className="col-12 col-sm-6 col-md-6 col-lg-3">
    <div className="image-card">
      <img src={src} alt={alt} className="img-fluid" />
      <div className="overlay">
        <div className="text">{text}</div>
      </div>
    </div>
  </div>
);

const ProductImage = () => {
  return (
    <div>
      <div className="productimage-title">
          <h3>FOLLOW THE MOVEMENT</h3>
          <p>@larssonjennings</p>
      </div>
      <div className="container-fluid" id="ImageCard">
        <div className="row">
          <ImageCard src="src\assets\productimage-1.jpeg" alt="Watch 1" text="SHOP THIS LOOK →" />
          <ImageCard src="src\assets\productimage-2.jpeg" alt="Jewelry" text="SHOP THIS LOOK →" />
          <ImageCard src="src\assets\productimage-3.jpeg" alt="Watch 2" text="SHOP THIS LOOK →" />
          <ImageCard src="src\assets\productimage-4.jpeg" alt="Watches Collection" text="SHOP THIS LOOK →" />
        </div>
      </div>
      <div className="load-more-container">
        <button className="load-more-button">LOAD MORE</button>
      </div>
    </div>
  );
}

export default ProductImage;
