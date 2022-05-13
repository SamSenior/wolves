import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Equipping the blockchain gaming sector with industry leading insight, education, and tools to build the games and communities of tomorrow.</h1>
      <p> Want to know more? Sign up for our newsletter to recieve time sensitive information, reviews and more. </p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Let's Go</button>
      </div>

      <div className="header-content__people">
        {/* <img src={people} alt="peeps" />
        <p>1,600 people requested access a visit in last 24 hours</p> */}
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
