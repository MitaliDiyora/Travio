import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ToureList = ({ itemsPerPage }) => {
  const items = [
    {
      img: "assets/images/tour-4.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-5.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-6.jpg",
      price: "190.00",
    },
    {
      img: "assets/images/tour-7.jpg",
      price: "145.00",
    },
    {
      img: "assets/images/tour-13.jpg",
      price: "175.00",
    },
    {
      img: "assets/images/tour-14.jpg",
      price: "180.00",
    },
    {
      img: "assets/images/tour-15.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-16.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-4.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-5.jpg",
      price: "160.00",
    },
    {
      img: "assets/images/tour-6.jpg",
      price: "190.00",
    },
    {
      img: "assets/images/tour-7.jpg",
      price: "145.00",
    },
    {
      img: "assets/images/tour-13.jpg",
      price: "175.00",
    },
    {
      img: "assets/images/tour-14.jpg",
      price: "180.00",
    },
    {
      img: "assets/images/tour-15.jpg",
      price: "170.00",
    },
    {
      img: "assets/images/tour-16.jpg",
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
            <div className="tour-block-item ">
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
          nextLabel={<FaArrowRight/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<FaArrowLeft/>}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default ToureList;
