import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer'
import Cart from '../components/Cart'
import CartProvider from '../context/CartContext'

const Routing = () => {
    return (
        <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Routing