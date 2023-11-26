import React, { useEffect, useState } from 'react';
  import InfiniteScroll from 'react-infinite-scroll-component';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import PageTitle from '../../components/PageTitle/PageTitle';
import img from '../../assets/ban2.jpg'
import Title from '../../components/Title/Title';





const Gallery = () => {
  const axiosPublic = useAxiosPublic();
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);

   
  
  useEffect(() => {
    axiosPublic.get('/gallery')
     .then(function (response) {
       console.log(response.data);
       setDataSource(response.data)
       
  })
  .catch(function (error) {
    console.log(error);
  });
  },[axiosPublic])
  const fetchData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
      setDataSource(dataSource.concat(dataSource))
    },500)
    } else {
      setHasMore(false);
    }
  }
  return (
    <div>
      <div className=' pb-16'>
<PageTitle img={img} text='Gallery'/>
      </div>
      <div className='pb-10'>
        <Title heading='Our Gallery' subheading='see image' />
      </div>
      <div >
        <InfiniteScroll
           const style={
            {
    
   display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gap: '10px',
   }
  }
        dataLength={dataSource.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<span style={{ textAlign: 'center' }} className="loading text-center loading-bars text-[#dc1853] loading-lg"></span>}
         endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
      >
        {
            dataSource.map((item, index) => {
              return <div key={index} >
              <img src={item?.img} alt="" />
            </div>
          } )
}
      </InfiniteScroll>
    </div>
    </div>
  );
};

export default Gallery;