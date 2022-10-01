import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import './styles.css';

const ItemListContainer = ({greeting}) => { // greeting -> prop

    console.log(db);

    const [catalogo, SetCatalogo] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        (async () => {
            try {
                    // genero la query
                    const q = categoryId ? 
                    query(collection(db, "products"), where("category", "==", categoryId))
                    :
                    query(collection(db, "products"));

                    // realizo llamado a firebase
                    const querySnapshot = await getDocs(q);
                    const productosFirebase = [];
                    // obtengo datos crudos en un snapshot
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
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
        <div className='main px-4 pt-2 d-flex flex-column justify-content-between align-items-center'>
            <h3 className='my-2'>{greeting}</h3>
            <ItemList products={catalogo}/>
        </div>
        
    )
}

export default ItemListContainer