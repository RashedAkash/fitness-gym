import React from 'react';
import Title from '../../components/Title/Title';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleTeam from './SingleTeam';
import useReviews from '../../Hooks/useReviews';
import SingleReview from './SingleReview';



const Testimonials = () => {
  const { reviews } = useReviews();
console.log(reviews);
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
       cssEase: "linear",
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
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
    <div className='pt-16' >
      <div className=' '>
        <Title heading='Trusted Testimonials' subheading='FEEDBACKS' />
      </div>
      <div >
        <Slider {...settings}>
          
            {
              reviews?.map(review => <SingleReview  key={review?.title} review={review}/>
               
              
             
                )
           }
          
                     
         
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;