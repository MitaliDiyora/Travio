import React from "react";
import Counterydet from "./Counterydet";
import Map from "./Map";
import Comment from "./Comment";
import PhotoGallary from "./PhotoGallary";

const DestinationLeft = () => {
  return (
    <>
      <div className="text-content">
        <div className="text">
          <h2>Mont Blanc Mountain</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div className="img-content">
          <div className="img">
            <img src="assets/images/destination-1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="assets/images/destination-2.jpg" alt="" />
          </div>
          <div className="img">
            <img src="assets/images/destination-3.jpg" alt="" />
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <Counterydet />
      <PhotoGallary />
      <Map />
      <Comment />
    </>
  );
};

export default DestinationLeft;
