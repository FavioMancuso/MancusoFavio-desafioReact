import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri"
import { useCartContext } from '../../context/CartContext';
import './styles.css';

const CartWidget = () => {
const {totalProducts} = useCartContext()
    return (
        <div className='cart mx-2'>
            <RiShoppingCartLine className='fs-4 mb-2 mx-2'/>
            <span>{totalProducts()}</span>
        </div>
    )
}

export default CartWidget

