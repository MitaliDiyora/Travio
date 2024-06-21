import React from 'react'
import Pagesbanner from '../Pagescomponanents/Pagesbanner'
import BlogList from '../Blog/BlogList'

const BlogGrid = () => {
  return (
    <>
    <Pagesbanner name='Blog Grid'/>
    <BlogList itemsPerPage={4} />
    
    </>
  )
}

export default BlogGrid