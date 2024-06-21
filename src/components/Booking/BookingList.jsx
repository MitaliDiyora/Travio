import React from 'react'
import Booking from './Booking'
import BookingDetail from './BookingDetail'

const BookingList = () => {
  return (
   <div className="booking-main">
   <div className="container">
    <div className="booking-inner">
        <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 formside">
              <Booking />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <BookingDetail />
            </div>
        </div>
    </div>
   </div>
   </div>
  )
}

export default BookingList