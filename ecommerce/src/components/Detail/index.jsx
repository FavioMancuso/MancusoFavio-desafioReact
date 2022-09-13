import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const Detail = ({products}) => {

    const addToCart = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }

    return (
        <div className='d-flex'>
            <div className='detail d-flex flex-column align-items-center'>
                <p className='mb-0 pb-0 h5'>{products.name}</p>
                <img src={products.img} width={250} alt="" />
                <p className='h6 mt-3'>{products.description}</p>
                <p style={{fontWeight: "600"}}>${products.precio}</p>
                <ItemCount initial={1} stock={products.stock} onAdd={addToCart}/>
            </div>
            <div className='d-flex flex-column align-items-between'>
                <p className='btn'>Devolución gratis</p>
                <p className='btn'>Medios de pago</p>
                <p className='btn'>Términos y condiciones</p>
            </div>
        </div>
    )
}

export default Detail