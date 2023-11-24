import React from 'react';

import useServices from '../../Hooks/useServices';
import SingleService from './SingleService';

const Services = () => {
  const { services } = useServices();
  
  return (
    <div>
      {
        services.map(service=> <SingleService service={service} key={service.title} />)
      }
    </div>
  );
};

export default Services;