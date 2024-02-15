import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or set them manually
    // For example, setProducts(api.fetchProducts());
    setProducts([
      { id: 1, name: 'Two Tier Coffee Table', price: '$3,000', image: '../../assets/thumbnails/rh-1-large.jpg', alt:'rh' },
      { id: 2, name: 'Elmwood Foyer Table', price: 'sold', image: '../../assets/thumbnails/foyer-1-large.jpg', alt:'foyer' },
      { id: 3, name: 'Ember Coffee Table', price: 'sold', image: '../../assets/thumbnails/ember-1-large.jpg', alt:'ember' },
      { id: 4, name: 'Walnut & Cherry Chessboard', price: 'sold', image: '../../assets/thumbnails/chessboard.png', alt:'chessboard' },
    ]);
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default Shop;