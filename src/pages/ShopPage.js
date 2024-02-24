import React from 'react'

import Product from '../components/Shop/Product/Product'

import products from '../product-information.json'

const ShopPage = () => {
    return (
        <div>
            <h1>Explore Our Woodwork Products</h1>
            <h2>Our Products</h2>
            <div className="product-list">
                {products.products.map((product) => (
                    <Product
                        key={product.id}
                        image={product.images[0]}
                        productKey={product.key}
                        {...product}
                    />
                ))}
            </div>
        </div>
    )
}

export default ShopPage
