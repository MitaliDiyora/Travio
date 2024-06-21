import React from 'react'
import Teamitem from '../Items/Teamitem'

const Team = () => {

    const team = [
        {
            img: 'assets/Images/team-1.jpg', title:'Merrie Lewis'
        },
        {
            img: 'assets/Images/team-2.jpg', title:'Parks Missie'
        },
        {
            img: 'assets/Images/team-3.jpg', title:'Mariana Buenos'
        }
    ]
    return (
        <div className="team-main">
            <div className="container">
                <div className="team-inner">
                    <div className="title">
                        <p>TOUR GUIDE</p>
                        <h2>Expert Tour Guides</h2>
                    </div>
                    <div className="row clearfix">
                        {
                            team.map((i) => <Teamitem value={i} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team