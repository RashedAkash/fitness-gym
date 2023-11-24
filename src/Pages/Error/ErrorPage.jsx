import React from 'react';
import img from '../../assets/errorjpg.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className=' relative'>
      <img src={img} className='w-full' alt="" />
      <Link to='/'>
        <button className='btn btn-secondary uppercase absolute bottom-5 left-0 right-0 mx-auto'>Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;