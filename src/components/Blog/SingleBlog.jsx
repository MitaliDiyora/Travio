import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <div className="news-block-one">
            <div className="item-inner">
                <div className="text-content">
                    <div className="category"><Link to="blog-details.html">Lifestyle</Link></div>
                    <h2>Including animation in your design system</h2>
                    <ul className="post-info">
                        <li><span>By</span> <Link to="index.html">Eva Green</Link></li>
                        <li> - </li>
                        <li className="comment"><Link to="blog-details.html">0 Comment</Link></li>
                    </ul>
                </div>
                <div className="img-content">
                    <img src="assets/images/news-9.jpg" alt="" />
                    <span className="post-date"><span><FaRegCalendarAlt/></span>20 Oct, 2020</span>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog