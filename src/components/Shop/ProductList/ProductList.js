// ProductList.js
import React from 'react';
import Product from '../Product/Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
