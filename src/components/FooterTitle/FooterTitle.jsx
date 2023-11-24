import React from 'react';

const FooterTitle = ({title}) => {
  return (
    <div>
      <h2 className=' relative pb-2'>
        {title}
        <span className=' absolute bottom-0 left-0 bg-red-600 h-[2px] w-[40px]'>

        </span>
      
      </h2>
    </div>
  );
};

export default FooterTitle;