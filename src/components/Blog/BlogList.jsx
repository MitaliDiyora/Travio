import React, { useState } from 'react'
import Search from '../Sidebar/Search'
import Download from '../Sidebar/Download'
import Post from '../Sidebar/Post'
import Advice from '../Sidebar/Advice'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'
import Blogitem from '../Items/Blogitem'

const BlogList = ({ itemsPerPage }) => {

    const items = [
        { img: 'assets/Images/news-9.jpg', date: '5 Oct, 2020', title: 'Including animation in your design system' },
        { img: 'assets/Images/news-10.jpg', date: '4 Oct, 2020', title: 'Strategic & commercial with issues' },
        { img: 'assets/Images/news-11.jpg', date: '3 Oct, 2020', title: 'A digital prescription for the industry.' },
        { img: 'assets/Images/news-12.jpg', date: '6 Oct, 2020', title: 'Best interior design idea for your home' },
        { img: 'assets/Images/news-13.jpg', date: '7 Oct, 2020', title: 'A digital prescription for the industry.' },
    ]

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className="blog-details-main blog-main">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="content-inner list-items">

                            {currentItems &&
                                currentItems.map((i) => <Blogitem value={i} />
                                )}
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel={<FaArrowRight />}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel={<FaArrowLeft />}
                                renderOnZeroPageCount={null}
                            />

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
    )
}

export default BlogList