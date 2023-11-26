import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ClassDetails = () => {
  const  gymClassData  = useLoaderData();
  const { _id, name, members, img, desc } = gymClassData;
  return (
    <div>

       <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-100">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 object-cover " />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
			<div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Members : { members}</a>
				<p className="text-xs dark:text-gray-400">By
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">{ name}</a>
				</p>
			</div>
            <div className="dark:text-gray-100 text-left space-y-3">
              
              <p>{desc }</p>
			</div>
		</div>
	</div>
</div>
      
    </div>
  );
};

export default ClassDetails;