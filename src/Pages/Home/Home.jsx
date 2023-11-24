import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Team from './Team';
import NewsLetter from './NewsLetter';
import Blog from './Blog';

const Home = () => {
  return (
    <div>
      <Banner />      
      <Services />
      <NewsLetter />
      <Team />
      <About />
      <Blog />
    </div>
  );
};

export default Home;