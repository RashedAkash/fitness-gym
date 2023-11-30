import React from 'react';
import Title from '../../components/Title/Title';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const PriceCard = ({ pr }) => {
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const { Price, Package } = pr;
	const handleJoinNow = () => {
		const booking = {
			email: user?.email,
			price: Price,
			package: Package
		};

		axiosSecure.post('/booking', booking)
			.then(res => {
				console.log(res.data);
				if (res?.data?.insertedId) {
					 Swal.fire({
  title: "Good job!",
  text: `${user?.displayName} you are apply successfully`,
  icon: "success"
});
				}
			})
			.catch(err => {
			console.log(err);
		})
	}

  return (
    <div>
      <section >
	

		
			
				<div className="flex flex-grow  flex-col p-6 space-y-8 rounded shadow sm:p-8  dark:bg-white text-gray-900">
					<div className="space-y-2">
						<h4 className="text-2xl uppercase mb-2 font-bold">{Package}</h4>
                  <span className="text-6xl text-gray-900 font-bold">${Price}</span>
					</div>
					<p className="mt-3 text-gray-900 leadi ">This category typically offers access to the gym's facilities and equipment.</p>
					<ul className="flex-1 mb-6 dark:text-gray-400">
						<li className="flex  mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#dc1853]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span className='text-gray-900'>12 trainings</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#dc1853]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span className='text-gray-900'>Free shower & lockers</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#dc1853]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span className='text-gray-900'>Personal yoga mat</span>
						</li>
						<li className="flex mb-2 space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-[#dc1853]">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
							<span className='text-gray-900'>Free parking</span>
						</li>
					</ul>
					<Link to='/dashboard/payment'>
						<button onClick={handleJoinNow} type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded dark:bg-[#dc1853] hover:text-gray-900 text-white"> Join now</button>
					</Link>
				</div>
			
			
			
			
		
	
</section>
    </div>
  );
};

export default PriceCard;