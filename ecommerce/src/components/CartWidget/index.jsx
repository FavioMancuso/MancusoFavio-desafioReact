import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri"
import './styles.css';

const CartWidget = () => {
    return (
        <div className='cart mx-2'>
            <RiShoppingCartLine className='fs-4 mb-2 mx-2'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget

