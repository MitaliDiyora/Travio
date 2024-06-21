import React from 'react'
import SingleBlog from './SingleBlog'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import Search from '../Sidebar/Search'
import Download from '../Sidebar/Download'
import Post from '../Sidebar/Post'
import Advice from '../Sidebar/Advice'
import Comment from '../Destination/Comment'
import CommentReply from './CommentReply'

const BlogDetails = () => {
    return (
        <>
            <div className="blog-details-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="content-inner">
                                <SingleBlog />
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet consectur adip icing sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation laboris nisi ut aliquip ex commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                </div>
                                <div class="image-box clearfix">
                                    <div class="image"><img src="assets/img/destination-1.jpg" alt="" /></div>
                                    <div class="image"><img src="assets/img/destination-2.jpg" alt="" /></div>
                                    <div class="image"><img src="assets/img/destination-3.jpg" alt="" /></div>
                                </div>
                                <div class="text">
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                                    <ul class="list clearfix">
                                        <li>Air fares</li>
                                        <li>4 Nights Hotel Accomodation</li>
                                        <li>Entrance Fees</li>
                                    </ul>
                                    <p>Totam rem aperiam eaque ipsa quae ab illo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                </div>
                                <div class="post-share-option">
                                    <div class="text">
                                        <h3>We Are Social On:</h3>
                                    </div>
                                    <ul class="social-links">
                                        <li><Link to="blog-details.html"><FaFacebookF /></Link></li>
                                        <li><Link to="blog-details.html"><FaGooglePlusG /></Link></li>
                                        <li><Link to="blog-details.html"><FaTwitter /></Link></li>
                                    </ul>
                                </div>

                                <CommentReply />
                                <Comment/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="sidebar-inner">
                                <Search />
                                <Download />
                                <Post />
                                <Advice />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails