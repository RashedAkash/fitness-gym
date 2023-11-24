import React from 'react';

import useServices from '../../Hooks/useServices';
import SingleService from './SingleService';
import Title from '../../components/Title/Title';

const Services = () => {
  const { services } = useServices();
  console.log(services);
  return (
    <div className='py-16'>
      <div>
        <Title heading='Service We Provide' subheading='OUR SERVICES'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        services?.map(service=> <SingleService service={service} key={service.title} />)
      }
    </div>
    </div>
  );
};

export default Services;