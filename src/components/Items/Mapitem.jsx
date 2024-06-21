import React from 'react'

const Mapitem = (props) => {
    return (
        <><div className="item">
                <div className="item-inner">
                    <div className="img-content">
                        <img  src='assets/images/marker-1.png' alt="" />
                        <span>{props.value.num}</span>
                    </div>
                    <div className="text-content">
                        <h3>{props.value.title}</h3>
                        <p>Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>

                </div>
        </>
    )
}

export default Mapitem