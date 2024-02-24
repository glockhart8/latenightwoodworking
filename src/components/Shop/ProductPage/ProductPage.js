import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const { name } = useParams()

    return (
        <div>
            <div>
                <img src={`../../assets/thumbnails/${name}.jpg`} alt="product" />
            </div>
            <div></div>
        </div>
    )
}

export default ProductPage
