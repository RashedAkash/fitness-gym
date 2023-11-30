import React from 'react';

const Title = ({heading, subheading}) => {
  return (
    <div className=' '>
      <h4 className=' uppercase text-[#dc1853] mb-3 font-bold  '>{ subheading}</h4>
      <h4 className='border-y-2  border-dashed  mx-auto border-[#dc1853] w-2/4 py-2 font-bold text-2xl lg:text-5xl'>{ heading}</h4>
    </div>
  );
};

export default Title;