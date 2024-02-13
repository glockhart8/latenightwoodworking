import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      {/* Add more details or actions related to the product */}
    </div>
  );
};

export default Product;
