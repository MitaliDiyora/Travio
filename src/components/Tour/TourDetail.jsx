import React from 'react'
import Download from '../Sidebar/Download'
import BookingForm from '../Sidebar/BookingForm'
import Advice from '../Sidebar/Advice'
import { FaClock, FaMap, FaUser } from 'react-icons/fa'
import Plane from './Plane'
import Map from '../Destination/Map'
import Comment from '../Destination/Comment'
import PhotoGallary from '../Destination/PhotoGallary'
import Review from './Review'
import Owerview from './Oweview'

const ToureDetail = () => {

    return (
        <div className="toure-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="content-inner">
                            <div className="text">

                            <h2>Overview</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    <ul class="info-list">
                                        <li><span><FaClock/></span>5 Days</li>
                                        <li><span><FaUser/></span>Age 15+</li>
                                        <li><span><FaMap/></span>G87P, Birmingham</li>
                                    </ul>
                                
                            </div>
                            <Owerview/>
                            <Plane/>
                            <Map/>
                            <PhotoGallary />
                            <Review />
                            <Comment/>
                            

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="sidebar-inner">
                            <BookingForm/>
                            <Download/>
                            <Advice/>
                            </div></div>
                </div>
            </div>
        </div>
    )
}

export default ToureDetail