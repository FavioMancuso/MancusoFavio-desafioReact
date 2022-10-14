import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart'
import AuthContainer from '../../containers/AuthContainer';
import { useState } from 'react';
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore'
import {Modal , Button} from 'react-bootstrap'
import Order from '../Order';
import './styles.css'

const Cart = () => {
    const {cart, totalPrice, removeAllCart} = useCartContext()

    const [showModalPay, setShowModalPay] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [user, setUser] = useState(null)
    const [nombre, setNombre] = useState("");
    const [DNI, setDNI] = useState("");
    const [date, setDate] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [domicilio, setDomicilio] = useState("");

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const order = {
        cliente: {
            name: nombre,
            apellido: apellido,
            dni: DNI,
            phone: celular,
            addres: domicilio,
            date: date
        },
        items: cart.map(product => ({ id: product.id , name: product.name , cantidad: parseInt(product.cantidad), precio: product.precio})),
        total: totalPrice()
    }

   const handleOrder = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({id}) => console.log('Orden de compra' , id , 'generada.'));
    
        cart.forEach(async (compra) => {
            const productStock = doc(db, "products", compra.id);
            const productSnap = await getDoc(productStock)
            await updateDoc(productStock, {
                stock: productSnap.data().stock - parseInt(compra.cantidad)
            });
        });

        removeAllCart()
    }

    
    if (cart.length === 0) {
        return (
            <div className='mainCart d-flex flex-column justify-content-center text-center mx-auto py-4'>
                <p className='btn btn-danger'>No hay elementos en el carrito</p>
                <Link to='/' className='btn btn-outline-dark' style={{width: ''}}>!Realiza tu compra!</Link>
            </div>
        )
    }
    return (
        <div className='mainCart'>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
                
            }       
            <p className='text-center h6'>Precio total de su compra: ${totalPrice()}</p>
            <div className='d-flex justify-content-center'>
                <Button className='my-3 btn btn-primary' onClick={handleModal}>Comfirmar compra</Button>
                <Modal show={showModal} onHide={handleModal} backdrop="static">
                {
                    showModalPay ? (
                        <>
                            <Modal.Header className='text-center h6'closeButton>
                                Datos personales
                            </Modal.Header>
                            <Modal.Body className="container-fluid d-flex flex-column justify-content-center py-0 my-0">
                                <label className="mt-2" htmlFor="nombre">Nombre</label>
                                <input className="my-2 p-1" type="text" id="nombre" onChange={(ev)=>setNombre(ev.target.value)}/>
                                <label className="mt-2" htmlFor="apellido">Apellido</label>
                                <input className="my-2 p-1" type="text" id="apellido" onChange={(ev)=>setApellido(ev.target.value)}/>
                                <label className="mt-2" htmlFor="dni">DNI</label>
                                <input className="my-2 p-1" type="number" id="dni" onChange={(ev)=>setDNI(ev.target.value)}/>
                                <label className="mt-2" htmlFor="date">Fecha de nacimietno</label>
                                <input className="my-2 p-1" type="date" id="date" onChange={(ev)=>setDate(ev.target.value)}/>
                                <label className="mt-2" htmlFor="celular">Celular</label>
                                <input className="my-2 p-1" type="number" id="celular" onChange={(ev)=>setCelular(ev.target.value)}/>
                                <label className="mt-2" htmlFor="domicilio">Domicilio</label>
                                <input className="my-2 p-1" type="text" id="domicilio" onChange={(ev)=>setDomicilio(ev.target.value)}/>
                            </Modal.Body>
                            <Modal.Footer className="text-center">
                                <Link to="/thanks" className="btn btn-primary" onClick={handleOrder}>Finalizar compra</Link>
                            </Modal.Footer>
                        </>
                    )
                    :
                    (
                        <>
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
                                    <Button className="btn btn-success" onClick={() => setShowModalPay(!showModalPay)}>Generar orden de pago</Button>
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
                                        <AuthContainer setUser={setUser}/>
                                    </Modal.Body>
                                </>
                            )
                            }
                        </>
                    )
                }
                </Modal>
            </div>
        </div>
    )
}

export default Cart
