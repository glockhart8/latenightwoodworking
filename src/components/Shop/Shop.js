import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API or set them manually
    // For example, setProducts(api.fetchProducts());
    setProducts([
      { id: 1, name: 'Product 1', price: 19.99, image: '../../assets/thumbnails/1.jpg' },
      { id: 2, name: 'Product 2', price: 29.99, image: '../../assets/thumbnails/foyer_1.jpg' },
      // Add more products as needed
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
