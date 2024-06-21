import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    return (
        <div className="contact-main">
            <div className="container">
                <div className="contact-inner row">
                    <div className="item col-lg-5 col-md-12 col-sm-12">
                        <div className="item-inner">
                            <div className="heading">
                                <p>Get in touch</p>
                                <h2>Feel Free to Contact with us</h2>
                            </div>
                            <div className="text-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua. Quis ultrices ipsum suspen ultrices gravida Risus commodo.</p>
                            </div>
                            <ul className="social-links">
                                <li><Link to=""><FaFacebookF /></Link></li>
                                <li><Link to=""><FaTwitter /></Link></li>
                                <li><Link to=""><FaGooglePlusG /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item col-lg-7 col-md-12 col-sm-12 ">
                        <div className="item-inner destinationdetail-inner-content">
                            <form method="post" className="comment-form">
                                <div className="row ">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="name" placeholder="Your Name" required="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Email Address" required="" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="phone" placeholder="Phone" required="" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Write Message"></textarea>
                                    </div>
                                    <div className="message-btn">
                                        <button type="submit" className="theme-btn"><Link to="/">Submit Now</Link></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm