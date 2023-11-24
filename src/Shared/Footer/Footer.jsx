import React from 'react';
import img1 from '../../assets/Twitter.png'
import img2 from '../../assets/Telegram.png'
import img3 from '../../assets/Linkedin.png'
import img4 from '../../assets/Behance.png'
import logo from '../../assets/logo.png'
import FooterTitle from '../../components/FooterTitle/FooterTitle';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-800 text-white">
  <aside className=' space-y-3'>
   <img src={logo} className=' w-[80px]' alt="" />
          <p className=' text-left'>A gym, also known as a fitness center or <br /> health club, is a facility dedicated to <br /> physical fitness and exercise gyms and <br /> typically offer a range</p>
          <div className=' flex gap-4'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
  </aside> 
  <nav>
    <header className="footer-title"><FooterTitle title='Quick Links'/></header> 
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Meet The Teams</a>
    <a className="link link-hover">Our Projects</a>
    <a className="link link-hover">Contact Us</a>
  </nav> 
  <nav>
    <header className="footer-title"><FooterTitle title='services'/></header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title"><FooterTitle title='legal'/></header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-gray-800 text-gray-400 border-t border-gray-500">
  <aside>
    <p>Copyright © 2023 - All right reserved by Fitness Gym</p>
  </aside>
</footer>
    </div>
  );
};

export default Footer;