import React from 'react'
import { useState , useEffect } from 'react'
import Detail from '../../components/Detail'
import { products } from '../../data/products';

const ItemDetailContainer = () => {

    const [detalle, SetDetalle] = useState([])

    useEffect(() => {

        (async()=> {

            const getDetalle = new Promise((accept, reject) => {
                accept(products)
            })

            try {
                const response = await getDetalle
                console.log(response);
                SetDetalle(response)
            } catch (error) {
                console.log(error);
            }
    
        })()

    }, [])

    return (
        <div className='d-flex flex-column justify-content-between align-items-center'>
        {detalle.map(e => {
            return <Detail products={e}></Detail>
        })}
        </div>
    )
}

export default ItemDetailContainer