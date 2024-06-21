import React from 'react'
import Blogitem from './Items/Blogitem'

const Blog = () => {
    const News =[
        {img:'assets/Images/tour-1.jpg', date:'5 Oct, 2020', title:'Including animation in your design system'},
        {img:'assets/Images/tour-2.jpg', date:'4 Oct, 2020', title:'Strategic & commercial with issues'},
        {img:'assets/Images/tour-3.jpg', date:'3 Oct, 2020', title:'Best interior design idea for your home'},
]
    return (
        <>
            <div className="blog-main">
                <div className="container">
                    <div className="title">
                        <p>News &amp; Articles</p>
                        <h2>Stay Update with Travio Tips</h2>
                    </div>

                    <div className="blog-inner">
                        <div className="row">
                        {
                                News.map((i) => <Blogitem value={i} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog