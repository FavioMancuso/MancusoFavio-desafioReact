import React, { useState } from 'react'
import { useEffect } from 'react';
import { products } from '../../data/products';
import ItemList from '../../components/ItemList';
import './styles.css';

const ItemListContainer = ({greeting}) => { // greeting -> prop

    const [catalogo, SetCatalogo] = useState([])

    useEffect(() => {

        (async()=> {

            const getProducts = new Promise((accept, reject) => {
        
                setTimeout(() => {
                    accept(products)
                }, 1500);
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

    return (
        <div className='main px-4 pt-2 d-flex flex-column justify-content-between align-items-center'>
            <h3 className='my-2'>{greeting}</h3>
            <ItemList products={catalogo}/>
        </div>
        
    )
}

export default ItemListContainer