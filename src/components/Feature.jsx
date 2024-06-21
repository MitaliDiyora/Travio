import React from 'react'
import Featureitem from './Items/FeatureItem'

const Feature = () => {

  const feature =[
    {img :"assets/Images/feature-1.jpg", text : "2000+ Our Worldwide Guide" , icon:"assets/Images/icon1.png"},
    {img :"assets/Images/feature-2.jpg", text : "100% Trusted Tour Agency" , icon:"assets/Images/icon2.png" },
    {img :"assets/Images/feature-3.jpg", text : "12+ Years of Travel Experience" , icon:"assets/Images/icon3.png" },
    {img :"assets/Images/feature-4.jpg", text : "98% of Our Travelers are Happy" , icon:"assets/Images/icon4.png"},
  ]
  return (
    <>
      <div className="feature-main">
        <div className="container">
          <div className="title">
            <p>TRAVIO SPECIALS</p>
            <h2>Why Travel with Tutive?</h2>
          </div>

          <div className="feature-content">
            {feature.map((i) => <Featureitem value={i} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature