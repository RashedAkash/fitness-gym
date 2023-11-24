import React from 'react';
import { Link } from 'react-router-dom';

const AboutCard = ({ about }) => {

  const { img, title, desc } = about;
  return (
    <div>
    
	{/* <div className="card h-[500px] border-r border-[#dc1853]  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="w-full" />
  </figure>
  <div className="card-body items-center text-center">
          <h2 className="card-title">{ title}</h2>
          <p>{ desc.slice(0,200)}...</p>
          <Link to='/trainer'>
          <div className="card-actions">
      <button className="btn text-white bg-[#dc1853]">Buy Now</button>
    </div>
          </Link>
  </div>
</div> */}
      <div className="card card-compact group  hover:bg-[#dc1853] hover:text-white transition-all duration-500 h-[500px] border-r border-[#dc1853] hover:border-gray-950  bg-base-100 shadow-xl">
        <figure><img src={ img} alt="img" /></figure>
  <div className="card-body text-left">
          <h2 className="card-title ">{title }</h2>
    <p>{ desc?.slice(0,200)}...</p>
    <Link to='/trainer'>
          <div className="card-actions">
      <button className="btn group-hover:bg-gray-900 text-white bg-[#dc1853]">Buy Now</button>
    </div>
          </Link>
  </div>
</div>
    </div>
  );
};

export default AboutCard;