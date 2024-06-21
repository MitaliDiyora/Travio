import React from 'react'
import Counteritem from './Items/Counteritem'

const Counter = () => {

    const count = [
        {
            img: 'assets/images/shape-5.png',
            count: '2000',
            plus: '+',
            title: 'Awesome Hikers'
        },
        {
            img: 'assets/images/shape-6.png',
            count: '70',
            plus: '+',
            title: 'Stunning Places'
        },
        {
            img: 'assets/images/shape-7.png',
            count: '1200',
            plus: '+',
            title: 'Miles to Hike'
        },
        {
            img: 'assets/images/shape-8.png',
            count: '15',
            title: 'Years in Service'
        }
    ]
    return (
        <>
            <div className="counter-main">
                <div className="bg-shape">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                </div>

                <div className="container">
                    <div className="counter-inner">
                        <div className="row">
                            {
                                count.map((i) => <Counteritem value={i} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
