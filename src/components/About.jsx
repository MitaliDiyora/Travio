import React from 'react'
import { Link } from 'react-router-dom'
import { RiPlayCircleLine } from "react-icons/ri";


const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="about-bg"> </div>
          <div className="bg-shape">
            <div className="shape1"></div>
            <div className="shape2"></div>
          </div>
          <div className="container">
            <div className="about-inner">
              <div className="left">
                <div className="img-content">
                  <div className="img-bg">
                    <img src="assets/Images/about-4.jpg" alt="" />
                  </div>
                </div>
                <div className="text-content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <h3>Find Your Best <br /> Destination </h3>
                  <Link>
                    <RiPlayCircleLine />
                  </Link>

                </div>
              </div>
              <div className="right">
                <div className="title">
                  <p>ABOUT TRAVIO</p>
                  <h2>Best Travel Agency Since 2008.</h2>
                </div>
                <div className="img-content">
                  <div className="img-bg">
                    <img src="assets/Images/about-5.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

          </div>
       
      </div>
    </>
  )
}
export default About