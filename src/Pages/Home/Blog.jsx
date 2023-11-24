import React from 'react';
import Title from '../../components/Title/Title';
import useBlog from '../../Hooks/useBlog';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from './SingleBlog';




const Blog = () => {
  const { blog } = useBlog();

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
     cssEase: "linear",
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className='pb-16'>
      
       <div className='py-16'>
      <Title heading='Read Our Latest Articles' subheading='BLOG POSTS' />
    </div>
     <div>
        
        <Slider {...settings}>
          {
            blog?.map(article => <SingleBlog  key={article._id} article={article}/> )
         }
        </Slider>
      </div>
   </div>
  );
};

export default Blog;