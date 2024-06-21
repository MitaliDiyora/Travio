
import React from 'react'

const Review = () => {
    return (
        <div className="review-box">
            <div className="text">
                <div className="total-rating">
                    <h2>4.8</h2>
                    <span>Superb</span>
                </div>
            </div>
            <div className="progress-content">
                <div className="progress-box">
                    <p>Accommodation</p>
                    <div className="bar">
                        <div class="bar-inner count-bar counted" data-percent="70%" style={{width : "70%"}} ></div>
                        <div class="count-text">70%</div>
                    </div>
                </div>
                <div className="progress-box">
                    <p>Transport</p>
                    <div className="bar">

                        <div class="bar-inner count-bar counted" data-percent="80%" style={{width : "80%"}}></div>
                        <div class="count-text">80%</div>

                    </div>
                </div>
                <div className="progress-box">
                    <p>Comfort</p>
                    <div className="bar">
                        <div class="bar-inner count-bar counted" data-percent="100%" style={{width : "100%"}}></div>
                        <div class="count-text">70%</div>
                    </div>
                </div>
                <div className="progress-box">
                    <p>Hospitality</p>
                    <div className="bar">
                        <div class="bar-inner count-bar counted" data-percent="70%" style={{width : "70%"}}></div>
                        <div class="count-text">70%</div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Review