import React from 'react';
import VideoUpload from './components/VideoUpload';
import Dashboard from './components/dashboard/Dashboard';
import Dashboardtwo from './components/dashboard/Dashboardtwo';
import Nav from "./components/modules/Nav";

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Dashboard/>
      <Dashboardtwo/>
      <VideoUpload />
    </div>
  );
}

export default App;
