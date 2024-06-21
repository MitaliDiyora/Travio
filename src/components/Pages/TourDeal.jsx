import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import TourDeals from '../Tour/TourDeals'
import Map from '../Map'
import Counter from '../Counter'

const TourDeal = () => {
  return (
    <>
    <Pagesbanner name='Tour Deals'/>
    <TourDeals />
    <Map />
    <Counter />
    </>
  )
}

export default TourDeal