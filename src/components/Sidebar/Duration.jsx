import React from 'react'

const Duration = () => {
  return (
    <div className='sidebar duration'>
         <div className="title">
        <h3>Category</h3>
      </div>
      <div className="duration-list">
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            0 - 24 hours
        </label>
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            1 - 2 Days
        </label>
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            2 - 3 Days
        </label>
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            3 - 4 Days
        </label>
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            4 - 5 Days
        </label>
      </div>
    </div>
  )
}

export default Duration