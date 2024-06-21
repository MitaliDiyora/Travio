import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import About from '../About'
import Video from '../Video'
import Destination from '../Destination'
import Team from '../Pagescomponanents/Team'

const Abouti = () => {
  return (
    <>
   <Pagesbanner
   name = 'About' />
   <About />
   <Video />
   <Destination />
   <Team />
   </>
  )
}

export default Abouti