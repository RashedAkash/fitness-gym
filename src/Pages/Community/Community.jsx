import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import forumImg from '../../assets/ban4.jpg'
import PageTitle from '../../components/PageTitle/PageTitle';
import useForum from '../../Hooks/useForum';
import SingleForum from './SingleForum';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Community = () => {
  // const { forum } = useForum();
  const [page, setPage] = useState(2);
    const axiosPublic = useAxiosPublic();
const {  data } = useQuery({
  queryKey: ['forum',page],
  queryFn: async () => {
    const data = await axiosPublic.get(`/forum/?page=${page}`)
    
    return data.data
    
  },
})
  const { result, count } = data || {};
  const totalPage = Math.ceil(count / 6);
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);
 
  
console.log(totalPage);
  return (
    <div>
      <div>
<PageTitle img={forumImg} text='Community' />
      </div>
      <div className=' py-10'>
        <Title heading='Our Community ' subheading= 'community' />
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
          result?.map(fr=> <SingleForum key={fr._id} fr={fr} />)
}
      </div>
      <div className='py-10'>
        {
          pages?.map((item, index) => <button className={` bg-[#dc1853] ${page == index && 'bg-green-600' } mr-2 w-10 h-10 rounded-full text-white`} onClick={()=>setPage(index)} key={index}>
            {index + 1}
          </button>)
        }
      </div>
    </div>
  );
};

export default Community;