import React from 'react'

const Owerview = () => {
    return (
        <>
            <div className="overview-inner">
                <ul className="overview-list ">
                    <li><span>Destination:</span>New York City</li>
                    <li><span>Departure:</span>Yes Requard</li>
                    <li><span>Departure Time:</span>New York City</li>
                    <li><span>Return Time:</span>English &amp; Spanish</li>
                    <li className=""><span>Included:</span>
                        <ul className="included-list ">
                            <li>Air fares</li>
                            <li>4 Nights Hotel Accomodation</li>
                            <li>Entrance Fees</li>
                            <li>Tour Guide</li>
                        </ul>
                    </li>
                    <li className=""><span>Excluded:</span>
                        <ul className="excluded-list ">
                            <li>Air fares</li>
                            <li>Air fares</li>
                            <li>Air fares</li>
                            <li>Air fares</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Owerview