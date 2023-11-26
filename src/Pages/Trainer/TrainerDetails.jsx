import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TrainerDetails = () => {
  const trainerData = useLoaderData();
  const { _id, name, image, experience, availableSlots } = trainerData;
console.log('ab',availableSlots);
 const renderAvailableSlots = availableSlots?.map((slot, index) => (
      <span key={index} className={slot ? 'slot-available' : 'slot-not-available'}>
        Slot {index + 1}
      </span>
    ));
  console.log('a', renderAvailableSlots);
  return (
    <div>
      <div className="available-slots">
              <p className='font-bold text-5xl text-[#dc1853]' >Available Time Slots:</p>
        <p className='flex flex-col text-3xl bg-black bg-opacity-90 py-7 my-10 text-white' >
          {renderAvailableSlots}
              </p>
            </div>
    </div>
  );
};

export default TrainerDetails;