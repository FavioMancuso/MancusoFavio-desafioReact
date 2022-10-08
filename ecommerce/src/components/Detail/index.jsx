import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../context/CartContext'
import './style.css'

const Detail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()

    const addToCart = (cantidad) => {
        setGoToCart(true);
        addProduct(data, cantidad)
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
                {
                    goToCart ?  <Link className='btn btn-success' to='/cart'>Finalizar compra</Link> : <ItemCount initial={1} stock={data.stock} onAdd={addToCart}/>
                }
                <div className='d-flex flex-column'>
                    <p className='btn btn-outline-dark'>Medios de pago</p>
                    <p className='btn btn-outline-dark'>Devolución gratis</p>
                    <p className='btn btn-outline-dark'>Términos y condiciones</p>
                </div>
                </div>
            </div>
        )
    }

export default Detail