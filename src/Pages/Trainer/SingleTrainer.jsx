import React from 'react';
import { NavLink } from "react-router-dom";

const SingleTrainer = ({ tr }) => {
  
  const { _id, name, image, experience, availableSlots } = tr;
  return (
    <div>
      <div className="max-w-md lg:h-[270px]  p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
		<img src={image} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col  space-y-4">
		<div>
            <h2 className="text-2xl font-semibold">{ name}</h2>
            <span className="text-sm dark:text-gray-400">Experience : {experience } years</span>
		</div>
		<div className="space-y-3">
			<span className="flex items-center space-x-2">
				<div className="rating ">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked  />
</div>
				
			</span>
			<span className="flex items-center space-x-2 ">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
					<path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
				</svg>
				<span className="dark:text-gray-400">+25 381 77 983</span>
            </span>
            <NavLink >
              <button className='btn mt-2 bg-[#dc1853] text-white border-none'>Know More</button>
            </NavLink>
		</div>
	</div>
</div>
    </div>
  );
};

export default SingleTrainer;