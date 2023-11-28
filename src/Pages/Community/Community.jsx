import React from 'react';
import Title from '../../components/Title/Title';
import forumImg from '../../assets/ban4.jpg'
import PageTitle from '../../components/PageTitle/PageTitle';
import useForum from '../../Hooks/useForum';
import SingleForum from './SingleForum';

const Community = () => {
  const { forum } = useForum();
  console.log(forum);
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
          forum?.map(fr=> <SingleForum key={fr._id} fr={fr} />)
}
      </div>
    </div>
  );
};

export default Community;