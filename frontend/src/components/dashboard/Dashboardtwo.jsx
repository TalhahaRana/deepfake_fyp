import React from "react";
import star from "../assets/star.png";
import "./Dashboardtwo.css";
const Dashboardtwo = () => {
  return (
    <div>
      <div className="two_content">
        <div className="two_upper">
         <p className="grad ">Working</p>
        </div>
        <div className="two_lower">
          <div className="two_left">
            <div>
              <img src={star} />
              <h1>Upload a video</h1>
              <p>
                Select the video you want to analyze. The video should be in the
                format of mp4 and time duration should be less than 5 minutes
              </p>
            </div>
            <div>
              <img src={star} />
              <h1>Analyze the video</h1>
              <p>
                Our AI will analyze the video by detecting the facial
                expressions using high precision data training
              </p>
            </div>
            <div>
              <img src={star} />
              <h1>The results</h1>
              <p>
                You will be provided with the results of the analysis either the
                video is fake or real
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardtwo;
