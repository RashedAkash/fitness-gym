import React from 'react';

const SingleService = ({ service }) => {
  
  const { _id, img, title, desc } = service;
  return (
    <div>
      <div className="card h-[500px]  hover:bg-gray-900 hover:text-white transition-all duration-500 bg-base-100 shadow-xl">
  <figure><img src={img} className='hover:scale-125  transition-all duration-500' alt="img" /></figure>
  <div className="card-body text-left">
          <h2 className="card-title">{ title}</h2>
          <p>{ desc?.slice(0,200)}...</p>
    <div className="card-actions ">
      <button className="btn text-white bg-[#dc1853]">Show Details</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleService;