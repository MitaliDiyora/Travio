import React from 'react'
import { Link } from 'react-router-dom'

const TourDealsItem = (props) => {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12 offer-block item'>
        <div className="item-inner">
            <div className="img-content">
                <img src={props.value.img} alt="" />
            </div>
            <div className="text-content">
            <span>Get 50% Off</span>
            <h3><Link to="/">{props.value.title}</Link></h3>
            <h4>{props.value.price}</h4>
            </div>
        </div>

    </div>
  )
}

export default TourDealsItem