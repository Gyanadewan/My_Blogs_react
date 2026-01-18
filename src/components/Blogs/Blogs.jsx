import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'
function Blogs({handleBookMark,handleMarkAsRead}) {
  
   const [blogs,setBlogs]=useState([])

    useEffect(() => {
      fetch("blogs.json")
      .then(res =>res.json())
      .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
  return (
    <div>
         <h1 className='text-3xl'>Total : {blogs.length}</h1>

         <div className="All-blogs grid grid-cols-2">
            {
              blogs.map((blog,index)=><Blog blog={blog} key={index} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} ></Blog>)
            }
         </div>
    </div>
  )
}

export default Blogs
