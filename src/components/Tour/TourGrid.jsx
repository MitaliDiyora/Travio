import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaClock, FaMap, FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const TourGrid = ({ itemsPerPage }) => {
  const items = [
    {
      img: "assets/images/tour-1.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-2.jpg",
      price: "180.00",
    },
    {
      img: "assets/images/tour-3.jpg",
      price: "155.00",
    },
    {
      img: "assets/images/tour-8.jpg",
      price: "130.00",
    },
    {
      img: "assets/images/tour-9.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-10.jpg",
      price: "190.00",
    },
    {
      img: "assets/images/tour-2.jpg",
      price: "150.00",
    },
    {
      img: "assets/images/tour-3.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-8.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-9.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-10.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-11.jpg",
      price: "190.00",
    },
    {
      img: "assets/images/tour-12.jpg",
      price: "150.00",
    },
    {
      img: "assets/images/tour-1.jpg",
      price: "180.00",
    },
    {
      img: "assets/images/tour-2.jpg",
      price: "145.00",
    },
    {
      img: "assets/images/tour-3.jpg",
      price: "160.00",
    },

  ];
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
    <>
      <div className="row list-item">
        {currentItems &&
          currentItems.map((i) => (
            <div className=" col-lg-6 col-md-6 col-sm-12 tour-grid ">
              <div className="item-inner">
                <div className="img-content">
                  <img src={i.img} alt="" />
                </div>
                <div className="text-content">
                  <div className="rating">
                    <span>
                      <FaStar />
                    </span>
                    8.0 Superb
                  </div>
                  <h3>
                    <Link to="">Moscow Red City Land</Link>
                  </h3>
                  <h4>
                    $170.00<span> / Per person</span>
                  </h4>

                  <ul class="info clearfix">
                    <li>
                      <span><FaClock /></span>5 Days
                    </li>
                    <li>
                      <span><FaMap /></span>G87P, Birmingham
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>

                  <Link to="tour-detail" className="sec-button">
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

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
    </>
  );
};

export default TourGrid;
