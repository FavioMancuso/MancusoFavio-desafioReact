import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer'
import Cart from '../components/Cart'
import CartProvider from '../context/CartContext'
import Footer from '../components/Footer'
import Thanks from '../components/Thanks'

const Routing = () => {
    return (
        <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/thanks" element={<Thanks/>}/>
            </Routes>
            <Footer/>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Routing