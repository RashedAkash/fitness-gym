import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Team from './Team';

const Home = () => {
  return (
    <div>
      <Banner />      
      <Services />
      <About />
      <Team />
    </div>
  );
};

export default Home;