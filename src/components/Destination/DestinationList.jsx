import React from 'react'
import DestinationItems from '../Items/Destinationitem'
import Masonry from '@mui/lab/Masonry';

const DestinationList = () => {
    const destination = [
        {
            img: 'assets/images/place-1.jpg',
            name: 'New York City'
        },
        {
            img: 'assets/images/place-13.jpg',
            name: 'Mont Blanc'
        },
        {
            img: 'assets/images/place-2.jpg',
            name: 'Norway Lake'
        },

        {
            img: 'assets/images/place-5.jpg',
            name: 'Vietnam'
        },
        {
            img: 'assets/images/place-4.jpg',
            name: 'Costa Rica'
        },



    ]
    return (
        <>
            <div className="destination-main">
                <div className="container">
                    <div className="row destination-inner">

                        <Masonry columns={3}>
                            {destination.map((i) => <DestinationItems value={i} />)}
                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationList
