import React from 'react';
import {Link} from 'react-router-dom'

const BannerImg = ({img}) => {
  return (
    <div>
      <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay  "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 uppercase text-2xl text-[#dc1853] font-bold">Welcome to our gym</h1>
      <p className="mb-5 text-5xl font-bold uppercase bg-gradient-to-r from-[#dc1853] via-green-500  to-white text-transparent bg-clip-text ">The Best Studio In Town</p>
            <Link to='/classes'>
            <button className="btn hover:text-black bg-[#dc1853] border-none text-white">Our Classes</button>
            </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default BannerImg;