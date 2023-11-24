import React from 'react';

const SingleService = ({ service }) => {
  
  const { _id, img, title, desc } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
          <h2 className="card-title">{ title}</h2>
          <p>{ desc}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleService;