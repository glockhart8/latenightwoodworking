// Product.js
import React from 'react';
import './Product.css';

const Product = ({ id, name, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      {/* Add buttons or other elements for interaction */}
    </div>
  );
};

export default Product;
