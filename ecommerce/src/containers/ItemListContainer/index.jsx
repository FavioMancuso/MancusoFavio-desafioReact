import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import './styles.css';

const ItemListContainer = () => { 

    const [catalogo, SetCatalogo] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        (async () => {
            try {
                    const q = categoryId ? 
                    query(collection(db, "products"), where("category", "==", categoryId))
                    :
                    query(collection(db, "products"));
                    const querySnapshot = await getDocs(q);
                    const productosFirebase = [];

                    querySnapshot.forEach((doc) => {
                        productosFirebase.push({id: doc.id, ...doc.data()})
                    });

                    SetCatalogo(productosFirebase)
                }
            catch(error){
                console.log(error);
            }
        })()
    }, [categoryId])

    return (
        <div className='main mainCart d-flex flex-column justify-content-between align-items-center'>
            <ItemList id='itemlist' products={catalogo}/>
        </div>
    )
}

export default ItemListContainer