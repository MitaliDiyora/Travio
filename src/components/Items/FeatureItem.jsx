import React from "react";
import { Link } from "react-router-dom";

const Featureitem = (props) =>{
    return(
        <>
        <div className="item">
              <div className="item-inner">
                <div className="img-content">
                  <Link to="/"><img src={props.value.img} alt="" /></Link>
                </div>
                <div className="text-content">
                  <div className="icon-box">
                  <Link to="/"><img src={props.value.icon} alt="" /></Link>   
                  </div>
                  <h4>
                    <Link to="/">{props.value.text}</Link>
                  </h4>
                </div>
              </div>
            </div>
        </>
    )
}

export default Featureitem