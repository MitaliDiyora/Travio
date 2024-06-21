import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import ListGrid from '../Tour/ListGrid'
import TourForm from '../Tour/TourForm'

const ToureList = () => {
    return (
        <>
            <Pagesbanner
                name='Tour List' />
                <TourForm/>
            <ListGrid />

        </>
    )
}

export default ToureList