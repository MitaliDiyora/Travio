import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import DestinationList from '../Destination/DestinationList'

const Destination = () => {
  return (
    <>
      <Pagesbanner
        name='Destination' />
        <DestinationList/>
    </>
  )
}

export default Destination