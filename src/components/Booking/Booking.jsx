import React from 'react'
import { Link } from 'react-router-dom'

const Booking = () => {
  return (
    <>
      <div className="booking-main">
        <div className="container">
          <div className="booking-inner">
            <ul className="process-label">
              <li className='current'> 1. Personal Info </li>
              <li> 2. Payment Info </li>
              <li> 3. Confirm </li>
            </ul>

            <div className="inner-box">
              <h3>Personal Info</h3>

              <form action="">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Address 1</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Address 2</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>ZIP Code</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>State</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" name="fname" required="" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="form-group">
                      <label>Message</label>
                      <textarea name="message" id="" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 column">
                    <div className="message-btn">
                      <button type="submit" className="theme-btn"><Link to="/">Next</Link></button>
                    </div>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Booking