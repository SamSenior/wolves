import React from "react";
import vrImage from "../../assets/vr.jpg";
import "./roadmap.css";

const Roadmap = () => (
  <div className="roadmap section__padding" id="roadmap">
    <div className="roadmap-image">
      <img src={vrImage} alt="vr" />
    </div>
    <div className="roadmap-content">
      <h1 className="gradient__text">Roadmap</h1>
      <h4>
        We believe in what Aristotle said that 'the whole is greater than the
        sum of its parts.' This quote speaks to the importance of synergy and
        wholeness in order for health and longevity. The Wolves DAO takes a
        top-down and bottom-up approach in aims to move the gaming space forward
        in a holistic manner.
      </h4>
      <p>
        Want to know what we have to offer and where we see ourselves in the
        future?
      </p>
      <button type="button">View Roadmap</button>
    </div>
  </div>
);

export default Roadmap;
