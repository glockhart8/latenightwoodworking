import React, { useState, useEffect } from 'react'
import Shop from '../components/Shop/Shop'

import Product from '../components/Shop/Product'

const ShopPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Fetch products from an API or set them manually
        // For example, setProducts(api.fetchProducts());
        setProducts([
            {
                id: 1,
                name: 'Two Tier Coffee Table',
                price: '$3,000',
                image: '../../assets/thumbnails/rh-1-large.jpg',
                alt: 'rh',
            },
            {
                id: 2,
                name: 'Elmwood Foyer Table',
                price: 'sold',
                image: '../../assets/thumbnails/foyer-1-large.jpg',
                alt: 'foyer',
            },
            {
                id: 3,
                name: 'Ember Coffee Table',
                price: 'sold',
                image: '../../assets/thumbnails/ember-1-large.jpg',
                alt: 'ember',
            },
            {
                id: 4,
                name: 'Walnut & Cherry Chessboard',
                price: 'sold',
                image: '../../assets/thumbnails/chessboard.png',
                alt: 'chessboard',
            },
        ])
    }, [])

    return (
        <div>
            <h1>Explore Our Woodwork Products</h1>
            <Shop />
            <h2>Our Products</h2>
            <div className="product-list">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}

export default ShopPage
