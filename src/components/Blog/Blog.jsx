
import React from 'react'
import { FaBookmark } from "react-icons/fa";
function Blog({blog,handleBookMark,handleMarkAsRead}) {
  //  console.log(blog)
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="" />
  </figure>
  <div className="card-body">
    <div className='author flex justify-around items-center'>
         <h3>{blog.author}</h3>
          <img className="w-16 rounded-full "src={blog.author_img} alt="" />
          <button onClick={()=>handleBookMark(blog)}> <FaBookmark size={25} /></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
     <div className='flex'>
        {
      blog.hashtag.map((has,index)=> <p key={index}>{has}</p>)
    }
     </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(parseInt(blog.reading_time),blog.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Blog
