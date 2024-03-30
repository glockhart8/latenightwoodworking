import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Common/Footer'
import Header from './components/Common/Header'
import ProductPage from './components/Shop/ProductPage/ProductPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import VideosPage from './pages/VideosPage'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div style={{ marginLeft: '5%', marginRight: '5%', }} >
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/shop/:key" element={<ProductPage />} />
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
