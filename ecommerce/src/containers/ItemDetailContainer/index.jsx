import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../../components/Detail'
const products = [
    {
        id: "1" ,
        name: "iPhone 12 Pro Max",
        description: "Silver - 128 GB",
        img: 'https://i.postimg.cc/gc5T7Hq1/iphonesilver.png',
        stock: 6,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "2" ,
        name: "Apple Watch Blue",
        description: "Apple Watch 14 Pro Life",
        img: 'https://i.postimg.cc/W31ws8kG/awblue.jpg',
        stock: 2,
        precio: 60000,
        categoty: "watch"
    },
    {
        id: "3" ,
        name: "Apple Watch White",
        description: "Apple Watch 14 Pro Life",
        img: 'https://i.postimg.cc/zfHwPvTN/awwhite.jpg',
        stock: 2,
        precio: 60000,
        categoty: "watch"
    },
    {
        id: "4" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/bYFTJYZn/iphonegraphite.png',
        stock: 8,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "5" ,
        name: "MacBook White",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/sg8PjT1R/macwhite.jpg',
        stock: 4,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "6" ,
        name: "MacBook BlackMatt",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/nrphf9mD/macgraphitte.jpg',
        stock: 2,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "7" ,
        name: "iPhone 12 Pro Max",
        description: "Graphite - 128 GB",
        img: 'https://i.postimg.cc/bYFTJYZn/iphonegraphite.png',
        stock: 8,
        precio: 160000,
        categoty: "ipad"
    },
    {
        id: "8" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/t4swMRSz/i-Phone-12-Pro-Max-pink.png',
        stock: 4,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "9" ,
        name: "Apple Watch Graphite",
        description: "Apple Watch 14 Pro Life",
        img: 'https://i.postimg.cc/KjZH2m8z/awgraphite.jpg',
        stock: 2,
        precio: 60000,
        categoty: "watch"
    },
    {
        id: "10" ,
        name: "Apple Watch Pink",
        description: "Apple Watch 14 Pro Life",
        img: 'https://i.postimg.cc/KzbBYN3q/awpink.jpg',
        stock: 8,
        precio: 60000,
        categoty: "watch"
    },
    {
        id: "11" ,
        name: "iPhone 12 Pro Max",
        description: "Pink - 128 GB",
        img: 'https://i.postimg.cc/t4swMRSz/i-Phone-12-Pro-Max-pink.png',
        stock: 4,
        precio: 160000,
        categoty: "airpods"
    },
    {
        id: "12" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/dQzyy5Mt/iphone12blue.png',
        stock: 2,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "13" ,
        name: "MacBook Silver",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/Tw6hc4tG/macsilver.jpg',
        stock: 2,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "14" ,
        name: "MacBook Silver",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/Tw6hc4tG/macsilver.jpg',
        stock: 2,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "15" ,
        name: "MacBook Silver",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/Tw6hc4tG/macsilver.jpg',
        stock: 2,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "16" ,
        name: "MacBook Silver",
        description: "PRO - 256GB - 16GB RAM",
        img: 'https://i.postimg.cc/Tw6hc4tG/macsilver.jpg',
        stock: 2,
        precio: 160000,
        categoty: "macbook"
    },
    {
        id: "17" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/dQzyy5Mt/iphone12blue.png',
        stock: 2,
        precio: 160000,
        categoty: "iphone"
    },
    {
        id: "18" ,
        name: "iPhone 12 Pro Max",
        description: "Blue Alpin - 128 GB",
        img: 'https://i.postimg.cc/dQzyy5Mt/iphone12blue.png',
        stock: 2,
        precio: 160000,
        categoty: "iphone"
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