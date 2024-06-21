import React from 'react'
import { Link } from 'react-router-dom'

const Dealsitem = (props) => {
    return (
        <><div className="item">
            <div className="item-inner">
                <div className="img-content">
                    <img src={props.value.img} alt="" />
                </div>
                <div className="text-content">
                    <span>Get 50% Off</span>
                    <h3><Link to="/">Group Travel to New Zealand</Link></h3>
                    <h4>$150<del>$300</del></h4>
                    <p>Lorem ipsum dolor amet consectetur adipiscing sed. do eiusmod tempor incididunt labore dolore magna aliqua.Quis ipsum suspen.</p>
                    <div className="message-btn">
                <button type="submit" className="theme-btn"><Link to="/tour-deal">See Details</Link></button>
              </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Dealsitem
