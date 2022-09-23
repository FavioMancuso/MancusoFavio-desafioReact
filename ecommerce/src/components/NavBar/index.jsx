import React from 'react';
import {Link} from 'react-router-dom';
import {FaApple} from 'react-icons/fa'
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#ebebeb"}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-4 d-flex align-items-center">
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/iphone">iPhone</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/macbook">MacBook</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/ipad">iPad</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/watch">Watch</Link>
                        </li>
                        <li className="nav-item mx-1">
                        <Link className="nav-link" to="/category/airpods">AirPods</Link>
                        </li>
                    </ul>
                    </div>
                    <Link className="navbar-brand h8 align-contents-center mx-2" style={{fontSize: '1.15rem'}} to="#">AppleWorld<FaApple className='fs-4 mb-2 text-white'/></Link>
                    <Link className='mx-4 text-decoration-none' to="#"><CartWidget/></Link>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar