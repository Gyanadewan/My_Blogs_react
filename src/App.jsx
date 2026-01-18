import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
function App() {
  const [Bookmarked,setBookmarked] = useState([]);
  const [readingCount,setReadingCount]= useState(0)

  const handleBookMark = (blog)=>{
  // console.log(blog)
   setBookmarked([...Bookmarked,blog])
  }
  // console.log(Bookmarked)
  const handleMarkAsRead =(time,id)=> {
    const newTime = readingCount + time;
    setReadingCount(newTime)
    handleRemoveFromBookmark(id)
  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookMark = Bookmarked.filter((mark)=>mark.id !== id);
    setBookmarked(remainingBookMark)
  } 
  return (
    <>
     
     <Navbar></Navbar>
    

     <div className="main-container flex text-center">
       <div className="left-container w-[70%]">
         <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
       </div>
       <div className="right-container w-[30%]">
         <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmarked count: {Bookmarked.length}</h1>
          {
            Bookmarked.map((marked)=> <p key={marked.id} className='bg-red-300 p-2 shadow  m-2'>{marked.title}</p>)
          }
       </div>
     </div>
    </>
  )
}

export default App
