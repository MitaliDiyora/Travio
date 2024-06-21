import React from 'react'
import { FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CommentReply = () => {
    const comment = [
        {
            img: 'assets/images/comment-1.png',
            name: 'Rebeka Dawson',
            date: 'April 12, 2020'
        },
        {
            img: 'assets/images/comment-2.png',
            name: 'Elizabeth Winstead',
            date: 'April 11, 2020'
        },
        {
            img: 'assets/images/comment-3.png',
            name: 'Benedict Cumbatch',
            date: 'April 10, 2020'
        }
    ]
    return (
        <div className='commentreply'>
            <div className="title">
                <h2>3 Comments</h2>
            </div>
            {
                comment.map((i) =>
                    <div className="comment">
                        <div className="img-content">
                            <img src={i.img} alt="" />
                        </div>
                        <div className="text-inner">
                            <div className="comment-info">
                                <h5>{i.name}</h5>
                                <span className="post-date">{i.date}</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nos trud exerc itation ullamco laboris.</p>
                            <Link to="" className="reply-btn"><FaShare/>Reply</Link>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CommentReply