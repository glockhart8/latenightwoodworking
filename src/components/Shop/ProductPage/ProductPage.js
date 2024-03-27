import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import products from '../../../product-information.json'

import './ProductPage.css'

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
        <div style={{ display: 'flex' }}>

        <div style={{ width: '50%',  }}>
            
            <Swiper navigation thumbs={{ swiper: thumbsSwiper }} modules={[Navigation, Thumbs]}>
                {product.images.large.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={`../../assets/${image}`} alt="product" className='responsive' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                loop
                onSwiper={setThumbsSwiper}
                slidesPerView={product.images.small.length}
                modules={[Navigation, Thumbs]}
                >
                {product.images.small.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='thumb-wrapper'>

                        <img src={`../../assets/${image}`} alt="product" className='responsive' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div style={{ width: '50%', marginLeft: '24px' }}>
            <h3>{product.name}</h3>
            <p>

                
            {product.description}

            </p>
        </div>
                </div>
    )
}

export default ProductPage
