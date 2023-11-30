import React from 'react';
import Title from '../../components/Title/Title';
import useTrainer from '../../Hooks/useTrainer';
import { Link } from 'react-router-dom';

const AllTrainer = () => {
  const { trainer } = useTrainer();
  console.log(trainer);
  return (
    <div>
      <div className=' py-10'>
        <Title subheading='all trainer' heading='Your All Trainer' />
      </div>
       <div className="overflow-x-auto pb-16">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Salary</th>
        
        <th>Experience</th>
      </tr>
    </thead>
    <tbody>
            {
              trainer?.map((tr,index)=>    <tr key={tr._id}>
        <th>
                  <h2>{index+1 }</h2>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={tr?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                      <div className="font-bold">{tr?.name }</div>
              
            </div>
          </div>
        </td>
        <td className=' font-bold'>$ { tr?.salary} </td>
                <td>{ tr?.experience} years</td>
                
        <th>
                  {
                  tr?.salary ?  <Link to='/dashboard/payment'>
                  <button className="btn btn-ghost bg-[#dc1853] text-white btn-xs">Pay</button>
                  </Link>:  
                  <button disabled className="btn btn-ghost bg-[#dc1853] text-white btn-xs">Pay</button>
                  
                 }
        </th>
      </tr> )
      }
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllTrainer;