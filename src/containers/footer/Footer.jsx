import React from 'react';
import WDLogo from '../../assets/WolvesDAO-White.png';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    {/* <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="footer-links">
    <div className="footer-links_logo">
        <img src={WDLogo} alt="WDlogo" />
       
      </div>
      
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Cyber Wolves</p>
        <p>Roadmap</p>
        <p>FAQ</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>info@wolvesdao.io</p>
      </div>
     
    </div>

    <div className="footer-copyright">
      <p>@2022 WolvesDAO All rights reserved.</p>
    </div>
    
  </div>
);

export default Footer;
