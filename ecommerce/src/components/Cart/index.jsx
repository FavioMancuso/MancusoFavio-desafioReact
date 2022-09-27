import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'

const Cart = () => {
    const {cart, totalPrice} = useCartContext()
    
    if (cart.length === 0) {
        return (
            <div className='d-flex flex-column justify-content-center text-center mx-auto py-4'>
                <p className='btn btn-danger'>No hay elementos en el carrito</p>
                <Link to='/' className='btn btn-outline-dark' style={{width: ''}}>!Realiza tu compra!</Link>
            </div>
        )
    }
    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }       
            <div className='d-flex justify-content-center'>
                <p className='btn btn-dark' style={{width: '15rem'}}>Total: ${totalPrice()}</p>
            </div>     
        </div>
    )
}

export default Cart