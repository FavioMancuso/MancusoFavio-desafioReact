import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'
import Cart from './components/Cart'
import React, { useEffect } from 'react';
import CartProvider from './context/CartContext'
import algoritmoGuardarDataProgramatica from './services/data';

export const CartContext = React.createContext('')
console.log('CartContext: ' , CartContext);

function App() {

  /*useEffect(() => {
    algoritmoGuardarDataProgramatica()
  }, [])*/

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
  );

}

export default App;
