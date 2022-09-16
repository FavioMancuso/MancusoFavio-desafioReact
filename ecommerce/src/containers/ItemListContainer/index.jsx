import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';
const products = [
    {
        id: "1" ,
        name: "iPhone 12 Pro Max",
        description: "Silver - 128 GB",
        img: 'https://i.postimg.cc/rwMH27FC/Buy-i-Phone-13-Pro-Max-128-GB-Silver-Verizon.png',
        stock: 6,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "2" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "3" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "4" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000,
        categoty: "accessories"
    },
    {
        id: "5" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "6" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000,
        categoty: "ipad"
    },
    {
        id: "7" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000,
        categoty: "ipad"
    },
    {
        id: "8" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "9" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000,
        categoty: "mcbook"
    },
    {
        id: "10" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000,
        categoty: "apple watch"
    },
    {
        id: "11" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000,
        categoty: "airpods"
    },
    {
        id: "12" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000,
        categoty: "iphone"
    }
]

const ItemListContainer = ({greeting}) => { // greeting -> prop

    const [catalogo, SetCatalogo] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

            const getData = new Promise((accept, reject) => {
                accept(products)
            })
            if (categoryId) {
                getData.then(res => SetCatalogo(res.filter(products => products.categoty === categoryId)))
            }
            else {
            getData.then(res => SetCatalogo(res))
            }

    }, [categoryId])

    return (
        <div className='main px-4 pt-2 d-flex flex-column justify-content-between align-items-center'>
            <h3 className='my-2'>{greeting}</h3>
            <ItemList products={catalogo}/>
        </div>
        
    )
}

export default ItemListContainer