import React from 'react'
import { useState } from 'react'
import {FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa'
import './styles.css'

const ItemCount = ({initial, stock, onAdd}) => {

    const [itemCount , SetItemCount] = useState(1)

    const handleAdd = () => {
        if (itemCount < stock) {
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
            <div className='d-flex w-100 align-items-baseline justify-content-between'>
                <button className='btn btn-success' onClick={handleAdd}><FaAngleDoubleUp/></button>
                <span>Unidades: {itemCount}</span>
                <button className='btn btn-danger' onClick={handleSupr}><FaAngleDoubleDown/></button>
            </div>
            <div className='btn mt-3 w-100 btn-primary' onClick={addCart}>Agregar al carrito</div>
        </div>
    )
}

export default ItemCount