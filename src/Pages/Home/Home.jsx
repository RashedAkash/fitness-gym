import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Team from './Team';
import NewsLetter from './NewsLetter';
import Blog from './Blog';
import Testimonials from './Testimonials';
import Classes from '../Classes/Classes';
import FeaturedClasses from './FeaturedClasses';

const Home = () => {
  return (
    <div>
      <Banner />  
      
      <Services />
      
      <NewsLetter />
<FeaturedClasses />
      <Team />
      
      <About />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;