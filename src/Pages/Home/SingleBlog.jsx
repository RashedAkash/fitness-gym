import React from 'react';
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleBlog = ({ article }) => {
  
  const { _id, img, name, date, title, desc } = article;
  return (
    <div>
      <div className="card  card-compact h-[550px] bg-gray-900 text-white shadow-xl">
  <figure><img src={img} className='hover:scale-110 transition-all duration-500' alt="img" /></figure>
        <div className="card-body space-y-3 text-left">
          <div className='flex justify-between items-center'>
            <p className='flex gap-1 items-center hover:text-[#dc1853] transition-all duration-500'><FaCalendar /> { date}</p>
            <p className='flex hover:text-[#dc1853] transition-all duration-500 gap-1 items-center '><FaUser /> { name}</p>
          </div>
          <h2 className="card-title inline-block transition-all duration-700 hover:border-b-2 border-white ">{ title}</h2>
          <p>{ desc?.slice(0,200)}...</p>
    <div className="card-actions ">
            <Link to={`/blogs/${_id}`}>
            <button className="btn hover:bg-black hover:text-white transition-all duration-500 bg-[#dc1853] text-white border-none">Show Details <FaArrowRight /> </button>
            
            </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleBlog;