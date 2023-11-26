import React from 'react';
import img from '../../assets/ban3.jpg'
import PageTitle from '../../components/PageTitle/PageTitle';
import useTrainer from '../../Hooks/useTrainer';
import Title from '../../components/Title/Title';
import SingleTrainer from './SingleTrainer';




const Trainer = () => {
  const { trainer } = useTrainer();
 
  return (
    <div>
      <div>
<PageTitle img={img} text='Trainer'/>
      </div>
      <div className='py-16'>
        <Title heading='Trainer Profile' subheading='Our trainer' />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pb-10'>
        {
          trainer?.map(tr=><SingleTrainer key={tr._id} tr={tr} />)
        }
      </div>
    </div>
  );
};

export default Trainer;