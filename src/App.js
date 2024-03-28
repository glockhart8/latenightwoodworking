import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './components/Shop/ProductPage/ProductPage'
import AboutPage from './pages/AboutPage'
import Header from './components/Common/Header'
function App() {
    return (
        <Router>
            <Header />
            <div style={{ marginLeft: '5%', marginRight: '5%', }} >
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/shop/:key" element={<ProductPage />} />
            </Routes>
            </div>
            {/* <Footer /> */}
        </Router>
    )
}

export default App
