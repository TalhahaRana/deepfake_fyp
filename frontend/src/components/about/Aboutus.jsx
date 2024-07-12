import React from "react";
import "./aboutus.css";
// import bg from "../../assets/bg.jpg";
import Nav from "../modules/Nav";
const Aboutus = () => {
  return (
    <div className="about_wrapper">
      <Nav />
      <div className="about_container">
        <h1 className="grad_two">About Us</h1>
        <p>
          We are Talha, Shehryar and Usman, three individuals united by a common
          mission: to combat the spread of misinformation fueled by deepfakes.
          Witnessing the rise of deepfakes, especially in memes and social
          media, ignited our passion to create a solution.
          <br />
          Our user-friendly DeepFake Detection System empowers everyone to be a
          critical consumer of online content. We believe that knowledge is the
          key weapon against misinformation. With our tool, you can analyze
          videos and identify potential deepfakes with ease, allowing you to
          navigate the online world with confidence.
          <br />
          This is just the first step in our journey. We're constantly striving
          to refine our system and unlock its full potential. Future features
          like live detection are on the horizon, aiming to equip you with even
          stronger tools to tackle deepfakes wherever they appear.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
