/*import React from 'react';
import {Link} from 'react-router-dom';
import {FaApple} from 'react-icons/fa'
import CartWidget from '../CartWidget';
import Navbar from 'react-bootstrap/Navbar'
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
                    <Link className="navbar-brand h8 align-contents-center mx-0" style={{fontSize: '1.15rem'}} to="/">AppleWorld<FaApple className='fs-4 mb-2 text-white'/></Link>
                    <Link className='text-decoration-none mx-4' to="/cart"><CartWidget/></Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar*/

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;