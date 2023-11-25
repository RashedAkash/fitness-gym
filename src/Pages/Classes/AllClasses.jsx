import React from 'react';
import Title from '../../components/Title/Title';
import useGymClasses from '../../Hooks/useGymClass';
import SingleClass from './SingleClass';

const AllClasses = () => {
  const { gymClasses } = useGymClasses();
  console.log(gymClasses);
  return (
    <div>
      <div>
        <Title heading='Our Classes' subheading='Our all classes' />
      </div>
      <div className='py-10 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          gymClasses?.map(gymClass=> <SingleClass key={gymClass._id} gymClass={gymClass} />)
}
      </div>
    </div>
  );
};

export default AllClasses;