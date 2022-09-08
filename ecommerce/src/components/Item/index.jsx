import React from 'react'


const Item = ({product}) => {
    return (
        <div className='d-flex flex-column align-items-center my-3 py-3'>
            <p>{product.name} - {product.description}</p>
            <img src={product.img} alt="" />
            <p>${product.precio}</p>
            <button className='btn btn-primary'>Agregar al carrito</button>
        </div>
    )
}

export default Item