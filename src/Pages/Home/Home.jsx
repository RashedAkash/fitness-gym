import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Team from './Team';
import NewsLetter from './NewsLetter';
import Blog from './Blog';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />      
      <Services />
      <NewsLetter />
      <Team />
      <About />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;