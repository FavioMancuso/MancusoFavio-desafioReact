import React from 'react'
import vuelvapronto from './assets/vuelvapronto.jpg'
import './styles.css'

const thanks = () => {
    return (
        <>
            <div className='thanks'>
                <p className='h4'>¡Su compra ha finalizado!</p>
                <img src={vuelvapronto} alt="" />
            </div>
        </>
    )
}

export default thanks