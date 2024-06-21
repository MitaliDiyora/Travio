import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaMicrophone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="top">
                    <div className="container">
                        <div className="footer-inner row ">
                            <div className="col-lg-3 col-md-6 col-sm-12 item">
                                <div className="logo-inner">
                                    <div className="logo">
                                        <Link to="/"><img src="assets/Images/footer-logo.png" alt="" /></Link>
                                    </div>
                                    <div className="text">
                                        <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
                                    </div>
                                    <ul class="social-links">
                                        <li><Link to="https://www.facebook.com/"><FaFacebookF /></Link></li>
                                        <li><Link to="https://x.com/?lang=en"><FaTwitter /></Link></li>
                                        <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                                        <li><Link to="https://www.google.com/"><FaGooglePlusG /></Link></li>
                                        <li><Link to="https://in.linkedin.com/"><FaLinkedinIn /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  item">
                                <div className="link-inner">
                                    <div class="title">
                                        <h3>Services</h3>
                                    </div>
                                    <div className="content">
                                        <ul className='link-list'>
                                            <li> <Link to="/">About Us</Link> </li>
                                            <li> <Link to="/">Listing</Link> </li>
                                            <li> <Link to="/">How It Works</Link> </li>
                                            <li> <Link to="/">Our Services</Link> </li>
                                            <li> <Link to="/">Our Blog</Link> </li>
                                            <li> <Link to="/">Contact Us</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  item">
                                <div className="gallary-inner">
                                    <div class="title">
                                        <h3>Gallary</h3>
                                    </div>
                                    <ul className='img-list'>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-1.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-2.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-3.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-4.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-5.jpg" alt="" />
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-content">
                                                <img src="assets/Images/footer-gallery-6.jpg" alt="" />
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  item">
                                <div className="contact-inner">
                                    <div class="title">
                                        <h3>Contacts</h3>
                                    </div>
                                    <div className="content">
                                        <ul className='info-list'>
                                            <li>
                                                <FaLocationDot />
                                                <p>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
                                            </li>
                                            <li>
                                                <FaMicrophone />
                                                <p>+2(305) 587-3407</p>
                                            </li>
                                            <li>
                                                <FaEnvelope />
                                                <p>info@example.com</p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="bottom-inner">
                            <div class="copyright pull-left">
                                <p><Link to="/">Travio</Link> © 2021 All Right Reserved</p>
                            </div>

                            <ul class="footer-nav pull-right">
                                <li><Link to="index.html">Terms of Service</Link></li>
                                <li><Link to="index.html">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer