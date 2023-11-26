import React from 'react';
import bgImg from '../../assets/strength.jpg'
import { Link } from 'react-router-dom';

const BeATrainer = () => {
  return (
    <div>
     <div className="hero min-h-[60vh] bg-fixed" style={{backgroundImage: `url(${bgImg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md text-white">
      <h1 className="mb-5 text-5xl font-bold"> Become a Trainer</h1>
     
            <Link to='/trainerApply'>
            <button className="btn text-white border-none hover:text-black bg-[#dc1853]">Apply Now</button>
            </Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default BeATrainer;