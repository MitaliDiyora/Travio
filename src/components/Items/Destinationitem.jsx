import React from 'react'
import { Link } from 'react-router-dom'

const DestinationItems = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 item">
            <div className="item-inner">
                <div className="img-content"><img src={props.value.img} alt="" /></div>
                <div className="text-content">
                    <h3><Link to="destination-detail">{props.value.name}</Link></h3>
                </div>
            </div>
        </div>
    )
}

export default DestinationItems
