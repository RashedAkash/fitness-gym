import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Team from './Team';
import NewsLetter from './NewsLetter';

const Home = () => {
  return (
    <div>
      <Banner />      
      <Services />
      <NewsLetter />
      <About />
      <Team />
    </div>
  );
};

export default Home;