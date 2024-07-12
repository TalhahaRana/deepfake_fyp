import React from "react";
import Nav from "../modules/Nav";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className="dash">
      <Nav />
      <div className="content">
        <div className="upper">
          <p>Detect The Deception with</p>
          <p className="grad">Precession and Trust</p>
        </div>
        <div className="lower">
          <div className="left"> Scroll down to get started</div>
          {/* <div className="right">
            <a href="/Learn">Learn More</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
