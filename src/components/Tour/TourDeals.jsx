import React from 'react'
import TourDealsItem from '../Items/TourDealsItem'

const TourDeals = () => {
    const tourdeals = [
        {
            img:'assets/Images/offer-1.jpg', title:'New York City', price:'$150'
        },
        {
            img:'assets/Images/offer-2.jpg', title:'Vietnam', price:'$170'
        },
        {
            img:'assets/Images/offer-3.jpg', title:'Norway Lake', price:'$190'
        },
        {
            img:'assets/Images/offer-4.jpg', title:'New York City', price:'$170'
        },
        {
            img:'assets/Images/offer-5.jpg', title:'Vietnam', price:'$150'
        },
        {
            img:'assets/Images/offer-6.jpg', title:'Norway Lake', price:'$190'
        }
    ]
    return (
        <>
            <div className="tour-deal-main">
                <div className="container">
                    <div className="title">
                        <p>Deals &amp; Offers</p>
                        <h2>Last Minute Amazing Deals</h2>
                    </div>
                    <div className="row">
                        {
                            tourdeals.map((i) => <TourDealsItem value={i} /> )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDeals