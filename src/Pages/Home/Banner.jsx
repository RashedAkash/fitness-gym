import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/ban1.jpeg'
import img2 from '../../assets/ban2.jpg'
import img3 from '../../assets/ban3.jpg'
import img4 from '../../assets/ban4.jpg'
import img5 from '../../assets/ban5.jpg'
import BannerImg from '../../components/BannerImg/BannerImg';

const Banner = () => {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
  return (
    <div>
      <div>
        
        <Slider {...settings}>
          
          <div>
            <BannerImg img={img2}/>
          </div>
          <div>
            <BannerImg img={img3}/>
          </div>
          <div>
            <BannerImg img={img4}/>
          </div>
          <div>
            <BannerImg img={img5}/>
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default Banner;