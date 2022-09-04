import React from 'react'
import {FaApple} from 'react-icons/fa'
import Darkmode from '../Darkmode';
import { useState } from 'react'
import ItemCount from '../ItemCount'
import './styles.css';

const ItemListContainer = ({greeting}) => { // greeting -> prop

    // Nombre del state, setNombreEstado
    /*const [navColor , setNavColor] = useState("#f8f9fa")

    const onChangeColor = (event) => {
        const color = event.target.value
        setNavColor(color)
    }
    <Darkmode handleColor={onChangeColor}/> // en return //  style={{backgroundColor: navColor}} // en main*/

    const addToCart = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }

    return (
        <div className='main px-4 pt-2 d-flex flex-column justify-content-between align-items-center'>
            <h3 className='my-2'>{greeting}<FaApple className='mb-2'/></h3>
            <ItemCount initial={1} stock={4} onAdd={addToCart}/>
        </div>
        
    )
}

export default ItemListContainer