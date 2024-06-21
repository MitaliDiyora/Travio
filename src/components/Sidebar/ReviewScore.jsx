import { Rate } from 'antd'
import React from 'react'

const ReviewScore = () => {
  return (
    <div className='sidebar review'>
        <div className="title">
            <h3>Review Score</h3>
        </div>
        <div className="review-list">
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <Rate defaultValue={5} />
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <Rate defaultValue={4} disabled/>
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <Rate defaultValue={3} disabled/>
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <Rate defaultValue={2} disabled/>
            </label>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <Rate defaultValue={1} disabled/>
            </label>
        </div>
    </div>
  )
}

export default ReviewScore