import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
    const post =[
        {
            img :'assets/Images/post-1.png',
            date:'April 18, 2020',
            title:'Consequntur eos magni dolore.'
        },
        {
            img :'assets/Images/post-2.png',
            date:'April 17, 2020',
            title:'Magni dolore qui ratione seque.'
        },
        {
            img :'assets/Images/post-3.png',
            date:'April 16, 2020',
            title:'Ratone magni sed dolore eos.'
        },
    ]
  return (
    <div className="sidebar post-main">
      <div className="title">
        <h3>Latest News</h3>
      </div>
      <div className="post-inner">
        {
            post.map((i) => (
                <div className="post">
            <div className="img">
                <Link to=''>
                    <img src={i.img} alt="" />
                </Link>
            </div>
            <div className="post-date">{i.date}</div>
            <h4><Link to=''>{i.title}</Link></h4>
        </div>
                    ))}
        
        
      </div>
    </div>
  );
};

export default Post
