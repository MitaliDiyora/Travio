import { Slider } from "antd";
import React from "react";

const Range = () => {
  return (
    <div className="sidebar range">
      <div className="title">
        <h3>Range</h3>
      </div>

      <div class="value-box">
        <div class="min-value">
          <p>$20.00</p>
        </div>
        <div class="max-value">
          <p>$100.00</p>
        </div>
      </div>

      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        
      />
    </div>
  );
};

export default Range;
