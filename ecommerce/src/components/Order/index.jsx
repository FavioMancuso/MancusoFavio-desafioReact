import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemOrder from '../ItemOrder'

const Order = () => {

    const {cart} = useCartContext()

    return (
        <>
        {
            cart.map(product => <ItemOrder key={product} product={product}/>)
        }
        </>
    )
}

export default Order