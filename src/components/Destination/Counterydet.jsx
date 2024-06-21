import React from "react";
import {
  FaComment,
  FaDollarSign,
  FaEnvelopeOpen,
  FaGlobe,
  FaIdCard,
  FaMap,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Counterydet = () => {
  return (
    <div className="country-details">
      <div className="text">
        <h3>Country Details</h3>
        <p>
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <ul>
        <li>
          
            <FaMapMarkedAlt />
            <span className="heading">Address:</span>
          
         
            <span className="description">New York City</span>
          
        </li>
        <li>
          
            <FaIdCard />
            <span className="heading">Visa Requirements:</span>
          
         
            <span className="description">Yes Requard</span>
          
        </li>
        <li>
          
            <FaGlobe />
            <span className="heading">Country:</span>
          
         
            <span className="description">New York City</span>
          
        </li>
        <li>
          
            <FaComment />
            <span className="heading">Languages spoken:</span>
          
         
            <span className="description">English & Spanish</span>
          
        </li>
        <li>
          
            <FaDollarSign />
            <span className="heading">Currency Used:</span>
          
         
            <span className="description">USD</span>
          
        </li>
        <li>
          
            <FaPhone />
            <span className="heading">Suport Phone:</span>
          
         
            <span className="description">
              <Link to="">+310215402</Link>
            </span>
          
        </li>
        <li>
          
            <FaEnvelopeOpen />
            <span className="heading">Emergency Email:</span>
          
         
            <span className="description">
              <Link to="">info@example.com</Link>
            </span>
          
        </li>
        <li>
          
            <FaMap />
            <span className="heading">Distance:</span>
          
         
            <span className="description">10.7m</span>
          
        </li>
      </ul>

    </div>
  );
};

export default Counterydet;
