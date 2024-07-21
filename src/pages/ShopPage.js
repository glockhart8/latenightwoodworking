import React from 'react'
import Product from '../components/Shop/Product/Product'
import products from '../product-information.json'
import ReactGA from 'react-ga4'

ReactGA.event({
    category: "website",
    action: "shop-page-loaded",
  });


const ShopPage = () => {
    return (
        <div className="product-list">
            {products.products.map((product) => (
                <Product
                    key={product.id}
                    image={product.images.large[0]}
                    productKey={product.key}
                    {...product}
                />
            ))}
        </div>
    )
}

export default ShopPage
