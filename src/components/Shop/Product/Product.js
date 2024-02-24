// Product.js
import React from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom'

const Product = ({ id, name, price, image }) => {
    const navigate = useNavigate()

    return (
        <div className="product" onClick={() => navigate(name)}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Product
