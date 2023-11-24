import React from 'react';

const BannerImg = ({img}) => {
  return (
    <div>
      <div className="hero min-h-[80vh]" style={{backgroundImage: `url(${img})`}}>
  <div className=" "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 uppercase text-2xl text-[#dc1853] font-bold">Welcome to our gym</h1>
      <p className="mb-5 text-5xl font-bold uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">The Best Studio In Town</p>
      <button className="btn bg-[#dc1853] border-none text-white">Our Classes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default BannerImg;