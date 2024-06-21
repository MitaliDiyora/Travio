import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const TourForm = () => {
  return (
    <div className="toure-form ">
      <div className="container">

        <div className="form-inner">
          <form className="booking-form" method='post'>
            <div className="form-group">
              <input type="text" name="service" placeholder="Where to?" required="" />
            </div>
            <div className="form-group input-date">
              <input type="date" name="date" placeholder="When?" id="datepicker" className="hasDatepicker" />
            </div>
            <div className="form-group">
              <div className="select-box">
                <select className="nice-select wide">
                  <option data-display="Travel Type" selected disabled>Travel Type</option>
                  <option value="1">Adventure Tours</option>
                  <option value="2">City Tours</option>
                  <option value="3">Couple Tours</option>
                  <option value="4">Group Tours</option>
                </select>

              </div>
            </div>
            <div className="message-btn">
              <button type="submit" className="theme-btn"><Link to="/"> <FaSearch /> Submit Now </Link></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourForm;
