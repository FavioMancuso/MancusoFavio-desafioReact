import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'
import AuthContainer from '../../containers/AuthContainer';
import { useState } from 'react';
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore'
import {Modal , Button} from 'react-bootstrap'
import Order from '../Order';

const Cart = () => {
    const {cart, totalPrice} = useCartContext()
    
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState(null)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const order = {
        cliente: {
            name: '',
            email: '',
            phone: '',
            address: ''
        },
        items: cart.map(product => ({ id: product.id , name: product.name , cantidad: parseInt(product.cantidad), precio: product.precio})),
        total: totalPrice()
    }

    const handleOrder = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => console.log(id));
    
        cart.forEach(async (compra) => {
            const productStock = doc(db, "products", compra.id);
            const productSnap = await getDoc(productStock)
            await updateDoc(productStock, {
                stock: productSnap.data().stock - parseInt(compra.cantidad)
            });
        });
    }
    
    if (cart.length === 0) {
        return (
            <div className='d-flex flex-column justify-content-center text-center mx-auto py-4'>
                <p className='btn btn-danger'>No hay elementos en el carrito</p>
                <Link to='/' className='btn btn-outline-dark' style={{width: ''}}>!Realiza tu compra!</Link>
            </div>
        )
    }
    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }       
            <p className='text-center h6'>Precio total de su compra: ${totalPrice()}</p>
            <div className='d-flex justify-content-center'>
                <Button className='my-3 btn btn-primary' onClick={handleModal}>Comfirmar compra</Button>
                <Modal show={showModal} onHide={handleModal} backdrop="static">
                    { user ? 
                    (
                    <>
                        <Modal.Header closeButton>
                            <p className='h5'>Detalle de su compra:</p>
                        </Modal.Header>
                        <Modal.Body className='pb-0 mb-0'>
                            <Order/>
                            <div className='h5 d-flex justify-content-between my-2'>
                                <p>Total a pagar:</p>
                                <span>${totalPrice()}</span>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className='text-center d-flex flex-column'>
                            <div className="btn btn-success" onClick={handleOrder}>Generar orden de pago</div>
                        </Modal.Footer>
                    </>
                    ) 
                    : 
                    (
                        <>
                            <Modal.Header className='text-center h6' closeButton>
                                Inicia sesión para confirmar tu compra
                            </Modal.Header>
                            <Modal.Body>
                                <AuthContainer setUser={setUser} />
                            </Modal.Body>
                        </>
                    )
                    }
                    </Modal>
            </div>
        </div>
    )
}

export default Cart
