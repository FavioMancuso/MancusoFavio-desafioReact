import React from 'react'
import ItemCount from '../ItemCount'
import './style.css'

const Detail = ({data}) => {

    const addToCart = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }

    return (
            <div className='detailprod d-flex'>
                <div className="detail_img d-flex flex-column w-100">
                    <div className="d-flex">
                        <div className="detail_img_secondary my-auto">
                            <div className="box my-1"></div>
                            <div className="box my-1"></div>
                            <div className="box my-1"></div>
                            <div className="box my-1"></div>
                            <div className="box my-1"></div>
                            <div className="box my-1"></div>
                        </div>
                        <div className='detail_img_principal d-flex flex-column align-items-center'>
                            <img src={data.img} width={450} alt="" />
                        </div>
                    </div>
                </div>
                <div className='detail_description d-flex flex-column align-items-center justify-content-around'>
                <p className='mb-0 pb-0 h5'>{data.name}</p>
                <p className='h6'>{data.description}</p>
                <p style={{fontWeight: "600"}}>${data.precio}</p>
                <ItemCount initial={1} stock={data.stock} onAdd={addToCart}/>
                    <p className='btn btn-outline-dark'>Devolución gratis</p>
                    <p className='btn btn-outline-dark'>Medios de pago</p>
                    <p className='btn btn-outline-dark'>Términos y condiciones</p>
                </div>
            </div>
        )
    }

export default Detail