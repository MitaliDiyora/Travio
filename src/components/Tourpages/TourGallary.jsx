import { Masonry } from '@mui/lab'
import { Image } from 'antd'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TourGallery = () => {
  const gallery = [
    {
      img: "assets/images/gallery-10.jpg"
    },
    {
      img: "assets/images/gallery-12.jpg"
    },
    {
      img: "assets/images/gallery-14.jpg"
    },
    {
      img: "assets/images/gallery-11.jpg"
    },
    {
      img: "assets/images/gallery-15.jpg"
    },
    {
      img: "assets/images/gallery-13.jpg"
    },


  ]
  return (
    <div className='gallary-main photo-gallery'>
      <div className="container">
        <div className="gallary-inner img-content">
          <Masonry columns={3} spacing={2}>
            {
              gallery.map((i) =>
                <div className="img">
                  <Image src={i.img} alt="" />
                  <Link>
                    <FaPlus />
                  </Link>
                </div>)
            }
          </Masonry>
        </div>
      </div>
    </div>
  )
}

export default TourGallery