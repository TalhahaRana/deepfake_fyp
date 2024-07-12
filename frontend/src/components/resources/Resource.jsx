import React from "react";
import { Link } from 'react-router-dom';
import Nav from "../modules/Nav";

const Resource = () => {
  return (
    <div className="about_wrapper">
      <Nav />
      <div className="about_container">
        <h1 className="grad_two">Resources</h1>
        <div className="work">
          <div>
            <h2>The Importance of Awareness in Deepfake Technology</h2>
            <p className="right">
              <Link to="/Articlea">Learn More</Link>
            </p>
          </div>
          <hr />
          <div>
            <h2>Tips for Detecting Deepfakes</h2>
            <p className="right">
              <Link to="/Articleb">Learn More</Link>
            </p>
          </div>
          <hr />
          <div>
            <h2>The Evolution of Deepfakes</h2>
            <p className="right">
              <Link to="/Articlec">Learn More</Link>
            </p>
          </div>
          <hr />
          <div>
            <h2>Psychological Effects of Deepfakes</h2>
            <p className="right">
              <Link to="/Articled">Learn More</Link>
            </p>
          </div>
          <hr />
          <div>
            <h2>The Role of AI in Combatting Deepfakes</h2>
            <p className="right">
              <Link to="/Articlee">Learn More</Link>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Resource;
