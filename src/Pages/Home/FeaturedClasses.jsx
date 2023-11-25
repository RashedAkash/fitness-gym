import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import { gymClassesData } from '../../../public/gymClasses.data';
import ClassCard from './ClassCard';

const FeaturedClasses = () => {
  const [classesData, setClassData] = useState(gymClassesData);

  const sortedClasses = [...classesData].sort((a, b) => b.members - a.members);
  const featuredClasses = sortedClasses.slice(0, 6);

  return (
    <div>
      <div>
        <div className='py-16'>
        <Title heading='TRAINING PROGRAMS' subheading='our classes'/>
        </div >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
          {
          featuredClasses.map(classInfo => <ClassCard key={classInfo.name} classInfo={classInfo} />)
        }
        </div>
      </div>
    </div>
  );
};

export default FeaturedClasses;