import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {FaApple} from 'react-icons/fa'
import CartWidget from '../CartWidget';
import Navbar from 'react-bootstrap/Navbar'
import './styles.css';

function CollapsibleExample() {
    return (
        <Navbar className='mx-0 px-0' collapseOnSelect expand="lg" style={{background: "#ebebeb"}} sticky="top">
            <Container className='d-flex flex-row-reverse'>
                <Navbar.Brand className='d-flex align-items-center'>
                    <Link className="navbar-brand h8 align-contents-center mx-0" style={{fontSize: '1.15rem'}} to="/">AppleWorld<FaApple className='fs-4 mb-2 text-white'/></Link>
                    <Link className='text-decoration-none mx-4' to="/cart"><CartWidget/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
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
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;