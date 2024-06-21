import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Teamitem = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 item">
            <div className="item-inner">
                <div className="img-content">
                    <img src={props.value.img} alt="" />
                </div><div className="text-content">
                    <h3>{props.value.title}</h3>
                    <span className="designation">Tour Guide</span>
                    <ul className='social-links clearfix'>
                        <li><Link to='https://www.facebook.com/'> <FaFacebookF /> </Link></li>
                        <li><Link to='https://x.com/?lang=en'> <FaTwitter /> </Link></li>
                        <li><Link to='https://www.instagram.com/'> <FaInstagram /> </Link></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Teamitem