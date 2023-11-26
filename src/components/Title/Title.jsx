import React from 'react';

const Title = ({heading, subheading}) => {
  return (
    <div className=' '>
      <h4 className=' uppercase text-[#dc1853] mb-3 font-bold  '>{ subheading}</h4>
      <h4 className=' font-bold text-5xl'>{ heading}</h4>
    </div>
  );
};

export default Title;