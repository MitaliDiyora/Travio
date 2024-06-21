import React from 'react'
import CountUp from 'react-countup';

const Counteritem = (props) => {
  return (
    <>
    <div className="item">
        <div className="item-inner">
            <div className="img-content">
                <div className="bg-pattern">
                    <img src={props.value.img} alt="" />
                </div>
                <div className="text-content">
                    <span><CountUp end={props.value.count} duration={5}></CountUp></span>
                    <span>{props.value.plus}</span>
                    <p>{props.value.title}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Counteritem