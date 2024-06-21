import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaUser } from "react-icons/fa";
import Sticky from 'react-sticky-el';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Register from './Register';
import { Modal } from 'react-bootstrap';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <header>
                <Sticky>
                    <Navbar expand="lg" >
                        <div className="left">
                            <Navbar.Brand href="#home">
                                <div className="img-content">
                                    <img src="assets/Images/logo.png" alt="" />
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <NavDropdown title="Denstination" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="destination">Destinations</NavDropdown.Item>
                                        <NavDropdown.Item href="destination-detail"> Destinations Detail </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Tours" id="basic-nav-dropdown">
                        
                                        <NavDropdown.Item href="/tour-list"> Tours List</NavDropdown.Item>
                                        <NavDropdown.Item href="/tour-deal"> Tours Deals</NavDropdown.Item>
                                        <NavDropdown.Item href="/tour-guide"> Tours Guides</NavDropdown.Item>
                                        <NavDropdown.Item href="/tour-detail"> Tours Detail</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/booking">Booking Process</NavDropdown.Item>
                                        <NavDropdown.Item href="/gallary"> Gallary</NavDropdown.Item>
                                        <NavDropdown.Item href="/faq"> FAQ's</NavDropdown.Item>
                                        <NavDropdown.Item href="/404"> 404</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/blog-grid">Blog Grid</NavDropdown.Item>
                                        <NavDropdown.Item href="/blog-detail"> Blog Detail </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="contact">Contact</Nav.Link>
                                </Nav>
                                <div className="contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>Chicago 12, Melborne City, USA</li>
                                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="social-links">
                                    <ul className="clearfix">
                                        <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                                        <li><a href="/"><span className="fab fa-facebook-square"></span></a></li>
                                        <li><a href="/"><span className="fab fa-pinterest-p"></span></a></li>
                                        <li><a href="/"><span className="fab fa-instagram"></span></a></li>
                                        <li><a href="/"><span className="fab fa-youtube"></span></a></li>
                                    </ul> </div>
                            </Navbar.Collapse>
                        </div>
                        <div className="right">
                            <div className="side-menu">
                                <div className="search">
                                    <Link to="/"><FaSearch /></Link>
                                </div>
                                <div className="user">
                                    <Link to="/" onClick={handleShow}><FaUser /></Link>

                                    <Modal show={show} onHide={handleClose}>
                                        <Register />
                                    </Modal>

                                </div>

                            </div>
                            <div className="message-btn">
                                <button type="submit" className="theme-btn"><Link to="/">Book A Tour</Link></button>
                            </div>
                        </div>

                    </Navbar>
                </Sticky>
            </header>


            {/*<header><Sticky>
                <div className="header-inner">
                    <div className="left">
                        <div className="logo">
                            <div className="img-content">
                                <img src="assets/Images/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><Link to="/" className='current '>Home</Link> </li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Destinations</Link>
                                    <ul className='submenu'>
                                        <li><Link to="/">Destinations</Link></li>
                                        <li><Link to="/">Destination Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Tours</Link>
                                    <ul className='submenu'>
                                        <li><Link to="/">Tours Grid</Link></li>
                                        <li><Link to="/">Tours List</Link></li>
                                        <li><Link to="/">Tour Details</Link></li>
                                        <li><Link to="/">Tour Deals</Link></li>
                                        <li><Link to="/">Tour Guide</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Pages</Link>
                                    <ul className='submenu'>
                                        <li><Link to="/">Booking Process</Link></li>
                                        <li><Link to="/">Gallary</Link></li>
                                        <li><Link to="/">FAQ's</Link></li>
                                        <li><Link to="/">Account</Link></li>
                                        <li><Link to="/">404</Link></li>
                                    </ul></li>
                                <li><Link to="/">Blog</Link>
                                    <ul className='submenu'>
                                        <li><Link to="/">Blog List</Link></li>
                                        <li><Link to="/">Blog Details</Link></li>
                                    </ul></li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="side-menu">
                            <div className="search">
                                <Link to="/"><FaSearch /></Link>
                            </div>
                            <div className="user">
                                <Link to="/"><FaUser /></Link>

                            </div>

                        </div>
                        <div className="message-btn">
                            <button type="submit" className="theme-btn">Book A Tour</button>
                        </div>
                    </div>
                </div></Sticky>
            </header>*/}

        </>
    )
}

export default Header
