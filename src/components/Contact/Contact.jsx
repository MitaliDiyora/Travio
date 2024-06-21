import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Contactdetail = () => {
  return (
    <div className="contactinfo-main">
                <div className="container">
                    <div className="contactinfo-inner row">
                        <div className="col-lg-4 col-md-6 col-sm-12 item">
                            <div className="item-inner">
                                <div className="icon">
                                    <FaLocationDot />
                                </div>
                                <div className="text-content">
                                    <h3>Address</h3>
                                    <p>31 park street, 5th Avenue, Dhanmondy, Dhaka.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 item">
                            <div className="item-inner">
                                <div className="icon">
                                <FaPhone />
                                </div>
                                <div className="text-content">
                                    <h3>Phone</h3>
                                    <p><Link to="tel:316668880001">+31 666 888 0001</Link><br/>
                                    <Link to="tel:316668880023">+31 666 888 0023</Link>    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 item">
                            <div className="item-inner">
                                <div className="icon">
                                < MdEmail />
                                </div>
                                <div className="text-content">
                                    <h3>Address</h3>
                                    <p><Link to="mailto:info@example.com">info@example.com</Link><br/>
                                    <Link to="mailto:info@example.com">info@example.com</Link>    </p>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Contactdetail