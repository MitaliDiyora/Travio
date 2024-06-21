import React from 'react'

const Pagesbanner = (props) => {
    return (
        <div className="pages-hero-main">
            <div className="container">
                <div class="pages-hero-content">
                    <h1 class="pages-hero-title">{props.name}</h1>
                    <p>Discover your next great adventure</p>
                </div>
           
            </div>
            <div className="layer"></div>
        </div>
    )
}

export default Pagesbanner