import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
    const {removeCart} = useCartContext()
    return (
        <div className='itemCart d-flex align-items-center justify-content-evenly my-4'>
            <img src={product.img} alt={product.name} width={200} className=''/>
            <div className=''>
                <p className='h6 my-3'>{product.name}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio x unidad: ${product.precio}</p>
                <p>Subtotal: ${product.precio * product.cantidad}</p>
                <p className='btn btn-danger' onClick={() => removeCart(product.id)}>Eliminar</p>
            </div>
        </div>
    )
}

export default ItemCart