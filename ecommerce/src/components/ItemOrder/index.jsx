import React from 'react'

const ItemOrder = ({product}) => {

    return (
        <div className='d-flex flex-column'>
            <div className="d-flex justify-content-between h6">
                <p>Producto:</p>
                <p>{product.name}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Precio:</p>
                <p>${product.precio}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Cantidad:</p>
                <p>{product.cantidad}</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Subtotal:</p>
                <p className='h6'>${product.cantidad * product.precio}</p>
            </div>
        </div>
    )
}

export default ItemOrder