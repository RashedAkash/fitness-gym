import React from 'react';
import Title from '../../components/Title/Title';
import { packages } from '../../../public/price.data';
import PriceCard from './PriceCard';

const Pricing = () => {
	
	return (
		<div>
			<div className=' py-10'>
				<Title heading='Choose your best plan' subheading='PRICING' />
			</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-16'>
			{
				packages?.map(pr=> <PriceCard key={pr.Package} pr={pr} />)
			}
    </div>
		</div>
  );
};

export default Pricing;