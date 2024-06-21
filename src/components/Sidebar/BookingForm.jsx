import React from 'react'
import { Link } from 'react-router-dom'

const BookingForm = () => {
    return (
        <div className='sidebar bookingform'>
            <div class="title"><h3>
                Book This Tour
            </h3></div>
            <form method="post">
                <div className="form-group">
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Phone' />
                </div>
                <div className="form-group">
                    <input type="text" placeholder='Tickets' />
                </div>
                <div className="form-group">
                    <input type="date" />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>

                <div className="message-btn">
                    <button type="submit" className="theme-btn"><Link to="/">Book A Tour</Link></button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm