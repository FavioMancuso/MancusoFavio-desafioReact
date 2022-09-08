import React from 'react'
import { useState } from 'react'
import iphone13promax2 from '../img/Buy iPhone 13 Pro Max 128GB Silver Verizon.jpg'
import './styles.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [itemCount , SetItemCount] = useState(1) // valor inicial // 1:02:00

    const handleAdd = () => {
        if (itemCount <= stock) {
        SetItemCount(itemCount+1)
        } else {
            alert("No hay suficiente stock")
        }
    }
    const handleSupr = () => {
        SetItemCount(itemCount-1)
    }
    const addCart = () => {
        onAdd(itemCount)
        SetItemCount(initial)
    }
    return (
        <div className='py-4 d-flex flex-column align-items-center'>
            <div className="h5 mb-0 pb-0">
                iPhone 12 Pro Max
            </div>
            <img className='img' src={iphone13promax2} alt="" />
            <div className='h6 mb-3'>Confirmar unidades:</div>
            <div className='d-flex w-100 align-items-baseline justify-content-between'>
                <button className='btn btn-success' onClick={handleAdd}>Add</button>
                <span>{itemCount}</span>
                <button className='btn btn-danger' onClick={handleSupr}>Delete</button>
            </div>
            <div className='btn mt-3 w-100 btn-primary' onClick={addCart}>Agregar al carrito</div>
        </div>
    )
}

export default ItemCount