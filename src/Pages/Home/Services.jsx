import React from 'react';

import useServices from '../../Hooks/useServices';
import SingleService from './SingleService';

const Services = () => {
  const { services } = useServices();
  console.log(services);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        services?.map(service=> <SingleService service={service} key={service.title} />)
      }
    </div>
  );
};

export default Services;