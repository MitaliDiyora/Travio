import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Dealsitem from './Items/Dealsitem';

const Deals = () => {
    const deal = [
        { img: "/assets/Images/deals-1-1.jpg" },
        { img: "/assets/Images/deals-2.jpg" },

    ]
    return (
        <>
            <div className="deal-main">
                <div className="container">
                    <div className="deal-inner">
                        <div className="title">
                            <p>DEALS &amp; OFFERS</p>
                            <h2>Last Minute Amazing Deals</h2>
                        </div>
                        <div className="content">
                            <OwlCarousel className='owl-theme' loop margin={10} nav items={1} autoplay autoplayTimeout={4000} dots={false} autoplaySpeed={3000}>
                                {deal.map((i) => <Dealsitem value={i} />)}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Deals
