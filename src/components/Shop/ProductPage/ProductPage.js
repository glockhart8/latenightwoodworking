import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import products from '../../../product-information.json'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { Navigation, Thumbs } from 'swiper/modules'

const ProductPage = () => {
    const { key } = useParams()

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const product = products.products.find((product) => product.key === key)

    return (
        // <div>
        <div style={{ width: '80%' }}>
            <Swiper navigation thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs]}>
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={`../../assets/${image}`} alt="product" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                loop
                onSwiper={setThumbsSwiper}
                slidesPerView={product.images.length}
                modules={[Navigation, Thumbs]}
            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={`../../assets/${image}`} alt="product" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductPage
