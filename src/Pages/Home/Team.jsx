import React from 'react';
import useTeam from '../../Hooks/useTeam';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleTeam from './SingleTeam';
import Title from '../../components/Title/Title';



const Team = () => {
  const { team } = useTeam();
  
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
    <div>
       <div className='pt-16'>
        <Title heading='Meet Our Amazing Team' subheading='OUR TRAINER'/>
        <Slider {...settings}>
          
            {
              team?.map(tm => <SingleTeam  key={tm.title} tm={tm}/>
               
              
             
                )
           }
          
                     
         
        </Slider>
      </div>
    </div>
  );
};

export default Team;