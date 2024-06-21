import React from 'react'
import Teamitem from '../Items/Teamitem'

const Guide = () => {

    const team = [
        {
            img: 'assets/Images/team-1.jpg', title:'Merrie Lewis'
        },
        {
            img: 'assets/Images/team-2.jpg', title:'Parks Missie'
        },
        {
            img: 'assets/Images/team-3.jpg', title:'Mariana Buenos'
        },
        {
            img: 'assets/Images/team-4.jpg', title:'Stephen Fowler'
        },
        {
            img: 'assets/Images/team-5.jpg', title:'Daisy Phillips'
        },
        {
            img: 'assets/Images/team-6.jpg', title:'Gregory Bowman'
        }
    ]
    return (
        <div className="team-main guide-main">
            <div className="container">
                <div className="team-inner">
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

export default Guide