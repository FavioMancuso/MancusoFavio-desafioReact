import React from 'react'
import {FaApple} from 'react-icons/fa'
import './styles.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div className='text-center pt-2'>
            <h3 className='my-2'>{greeting}<FaApple className='mb-2'/></h3>
        </div>
        
    )
}

export default ItemListContainer