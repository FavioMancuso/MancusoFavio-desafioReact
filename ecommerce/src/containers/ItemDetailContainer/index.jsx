import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../../components/Detail'
const products = [
    {
        id: "1" ,
        name: "iPhone 12 Pro Max",
        description: "Silver - 128 GB",
        img: 'https://i.postimg.cc/rwMH27FC/Buy-i-Phone-13-Pro-Max-128-GB-Silver-Verizon.png',
        stock: 6,
        precio: 160000
    },
    {
        id: "2" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000
    },
    {
        id: "3" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000
    },
    {
        id: "4" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000
    },
    {
        id: "5" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000
    },
    {
        id: "6" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000
    },
    {
        id: "7" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000
    },
    {
        id: "8" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000
    },
    {
        id: "9" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000
    },
    {
        id: "10" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/wThrP9Hj/iphone13promax2.jpg',
        stock: 8,
        precio: 160000
    },
    {
        id: "11" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/rm4DCkwX/descarga.jpg',
        stock: 4,
        precio: 160000
    },
    {
        id: "12" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/BQWyMXrz/Apple-i-Phone-13-Pro-128-Go-Bleu-Alpin.jpg',
        stock: 2,
        precio: 160000
    }
]

export const ItemDetailContainer = () => {

    const [data, SetData] = useState([])

    const {productId} = useParams()

    useEffect(() => {

            const getData = new Promise((accept, reject) => {
                accept(products)
            })
            getData.then(res => SetData(res.find(products => products.id === productId)))

    }, [productId])

    console.log(data);

    return (
        <Detail data={data}/>
    )
}

export default ItemDetailContainer