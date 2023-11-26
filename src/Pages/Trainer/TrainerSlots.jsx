import React from 'react';
import { FaCalendarAlt, FaClock, FaDailymotion, FaUser } from 'react-icons/fa';
import Title from '../../components/Title/Title';

const TrainerSlots = ({ name }) => {
  console.log(name);
  return (
    <div>
      <div>
        <Title heading=' Available time slot' subheading='time slot' />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
      <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> Saturday </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 10.00 - 11.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
      <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> Sunday </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 2.00 - 3.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
     <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> Monday </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 5.00 - 6.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
     <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> Tuesday </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 4.00 - 5.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
      <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> WEDNESDAY </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 7.00 - 8.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
      <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> THURSDAY </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : 9.00 - 10.00 </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
      <div className=' space-y-1 bg-gray-100 p-7 text-left'>        
        <h4 className=' uppercase flex gap-2 items-center text-[#dc1853]'><FaCalendarAlt /> Friday </h4>
        <h4 className='flex gap-2 items-center'> <FaClock />  Available time slot : Not Available </h4>
        <h2 className=' font-semibold flex gap-2 items-center'> <FaUser /> {name}</h2>
      </div>
    </div>
    </div>
  );
};

export default TrainerSlots;