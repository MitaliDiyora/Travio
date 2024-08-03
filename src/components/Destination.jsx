import React from 'react'
import DestinationItems from './Items/Destinationitem'
import { Link } from 'react-router-dom'

const Destination = () => {
    const destination = [
        {
            img: '/assets/images/place-1.jpg',
            name: 'New York City'
        },
        {
            img: '/assets/images/place-2.jpg',
            name: 'Norway Lake'
        },
        {
            img: '/assets/images/place-3.jpg',
            name: 'Affrican Park'
        },
        {
            img: '/assets/images/place-4.jpg',
            name: 'Vietnam'
        }
    ]
    return (
        <>
            <div className="destination-main">
                <div className="anim-icon">
                    <div className="icon-1" ></div>
                    <div className="icon-2" ></div>
                    <div className="icon-3" ></div>
                </div>
                <div className="container">
                    <div className="destination-inner row">
                        <div className="col-lg-4 col-md-6 col-sm-12 heading-main">
                            <div className="title">
                                <p>Choose Your place</p>
                                <h2>Popular Destinations</h2>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt.</p>
                            </div>
                        </div>
                        {destination.map((i) => <DestinationItems value={i} />)}
                        <div className="col-lg-4 col-md-6 col-sm-12 link-item">
                            <div className="link-inner">
                                <h3>Find All <br />Destination</h3>
                                <div className="message-btn">
                                    <button type="submit" className="theme-btn"><Link to="/destination">Find Now</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination
