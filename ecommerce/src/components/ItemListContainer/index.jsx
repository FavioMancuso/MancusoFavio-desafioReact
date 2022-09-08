import React, { useState } from 'react'
import { useEffect } from 'react';
import { products } from '../../data/products';
import ItemList from '../ItemList';
import './styles.css';

const ItemListContainer = ({greeting}) => { // greeting -> prop

    const [catalogo, SetCatalogo] = useState([])

    useEffect(() => {

        (async()=> {

            const getProducts = new Promise((accept, reject) => {
        
                setTimeout(() => {
                    accept(products)
                }, 3000);
            })

            try {
                const response = await getProducts
                console.log(response);
                SetCatalogo(response)
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    const addToCart = (cantidad) => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }

    return (
        <div className='main px-4 pt-2 d-flex flex-column justify-content-between align-items-center'>
            <h3 className='my-2'>{greeting}</h3>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer