import React from 'react';

const PageTitle = ({img,text}) => {
  return (
    <div>
      <div className="hero min-h-[60vh]" style={{backgroundImage: `url(${img})`}}>
  <div className=""></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
            <h1 className="mb-5 text-5xl bg-black bg-opacity-60 py-20 text-[#dc1853] uppercase px-24 font-bold">{text}</h1>
      
      
    </div>
  </div>
</div>
    </div>
  );
};

export default PageTitle;