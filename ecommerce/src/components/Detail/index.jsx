import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const Detail = ({data}) => {

    const addToCart = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }

    return (
        <div className='d-flex'>
            <div className='detail d-flex flex-column align-items-center'>
                <p className='mb-0 pb-0 h5'>{data.name}</p>
                <img src={data.img} width={250} alt="" />
                <p className='h6 mt-3'>{data.description}</p>
                <p style={{fontWeight: "600"}}>${data.precio}</p>
                <ItemCount initial={1} stock={data.stock} onAdd={addToCart}/>
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