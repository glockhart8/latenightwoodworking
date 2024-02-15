import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './components/Shop/ProductPage/ProductPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' exact element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/shop/:name' element={<ProductPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
