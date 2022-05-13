import React from 'react';
import Feature from '../../components/feature/Feature';
import './services.css';

const featuresData = [
  {
    title: 'Audit Services',
    text: 'We provide a highly extensive audit service that will help teams reach their full potential to capitalise on all aspects of a release',
  },
  {
    title: 'Tokenomics calculators',
    text: 'We offer this free service to our customers to help the mlearn and understand tokenomics, which plays a cruical part of the blockhain gaming sector.',
  },
  {
    title: 'Report writing',
    text: 'We have a team of wolves constantly assessing and sharing about the latest advancements and projects',
  },
  {
    title: 'Marketing',
    text: 'We aim for excellence and will continue to better our brand, team and vison',
  },
  {
    title: 'Curated Education',
    text: 'Education is the backbone of our ethos, we will always strive to expand the significance of this subject and teach the public how to educate themselves',
  },
];

const roadmap = () => (
  <div className="features section__padding" id="services">
    <div className="features-heading">
      <h1 className="gradient__text">We will provide services and continue to expand as we strive to be the worlds leading resource for builders, investors and communities creating the web3.0 games of tomorrow.</h1>
      <p></p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default roadmap;
