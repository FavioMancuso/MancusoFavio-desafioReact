import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../../components/Detail'
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';
export const ItemDetailContainer = () => {

    const [data, SetData] = useState([])

    const {productId} = useParams()

    useEffect(() => {
        
        const querydb = db;
        const queryDoc = doc(querydb, "products", productId);
        getDoc(queryDoc) .then(res => SetData({id: res.id, ...res.data()}));

    }, [productId])


    return (
        <Detail data={data}/>
    )
}

export default ItemDetailContainer