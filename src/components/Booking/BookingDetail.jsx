import React from 'react'
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'

const BookingDetail = () => {
    return (
        <>
            <div className="process-sidebar ml-20">
                <div className="content-box">
                    <h3>Tour Summary</h3>
                    <div className="img-content">
                        <img src="assets/Images/sidebar-1.jpg" alt="" />
                    </div>
                    <h4>Mascow Red City Land</h4>
                    <ul className='info'>
                        <li><FaRegCalendarAlt /> From:  <span>25 Oct, 2020</span></li>
                        <li><FaRegCalendarAlt /> To:   <span>29 Oct, 2020</span></li>
                        <li><FaRegUser /> Guests:  <span>2 Adults, 1 Child</span></li>
                    </ul>
                    <div className="price"><h4>Total: $170.00</h4></div>
                    
                </div>

            </div>
        </>
    )
}

export default BookingDetail