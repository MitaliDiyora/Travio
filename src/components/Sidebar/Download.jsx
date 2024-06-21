import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <div className="sidebar download">
    <div className="title">
      <h3>Downloads</h3>
    </div>
    <ul>
        <li>
            <Link to=''>Travel Direction<span><FaDownload/></span></Link>
            
        </li>
        <li>
            <Link to=''>Documetation<span><FaDownload/></span></Link>
            
        </li>
        <li>
            <Link to=''>Logo & Assets<span><FaDownload/></span></Link>
            
        </li>
    </ul>
  </div>
  )
}

export default Download