import React from 'react';
import Title from '../../components/Title/Title';
import { aboutData } from '../../../public/about.data';
import AboutCard from './AboutCard';

const About = () => {
  return (
    <div className=''>
      <div className='pb-10'>
        <Title heading='Achieve Your Goals.' subheading='ABOUT US' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          aboutData?.map(about=><AboutCard key={about.title} about={about}/>)
}
      </div>
    </div>
  );
};

export default About;