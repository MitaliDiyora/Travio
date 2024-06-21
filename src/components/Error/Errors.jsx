import React from 'react'
import { Link } from 'react-router-dom'

const Errors = () => {
  return (
    <div className="error-main">
      <div className="container">
        <div className="error-inner">
          <h1>404</h1>
          <p>Oops! That page is not found.</p>

          <div className="message-btn">
            <button type="submit" className="theme-btn"><Link to="/">Go To Home</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Errors