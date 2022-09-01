import React from 'react';
import {Link} from 'react-router-dom';
import {FaApple} from 'react-icons/fa'
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = (props) => {

    console.log(props)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand align-contents-center mx-2" to="#">YourPhone<FaApple className='fs-4 mb-2'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="#">Home</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="#">Productos</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="#">Métodos de pago</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="#">Novedades</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="#">Contacto</Link>
                        </li>
                    </ul>
                    </div>
                    <CartWidget/>
                </div>
                </nav>
                
        </div>
        
    )
}

export default NavBar