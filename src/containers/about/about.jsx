import React from "react";
import Feature from "../../components/feature/Feature";
import "./about.css";

const About = () => (
  <div className="about section__margin" id="about">
    <div className="about-heading">
      <h1 className="gradient__text">
        We envision a future where everyone from projects to players have access
        to what they need to create a world of integrity, prosperity and fun
      </h1>
      <div><image></image></div>
    </div>
    <div className="about-container">
      <Feature
        title="Insights"
        text="Our top-down approach provides game developers, studios, guilds, and venture capital with key insights from our audit service. We also provide a communal network of industry leaders in which they can tap into."
      />
      
      <Feature
        title="Education"
        text="Our bottom-up approach equips gamers and retail investors with education and tools that promote sector accountability and build sustainable communities to thrive culturally and economically"
      />
      <Feature
        title="Tools"
        text="We offer a range of tools and services that will help to educate and share knowledge with our clients and followers"
      />
    </div>
  </div>
);

export default About;
