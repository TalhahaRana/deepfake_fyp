import React from 'react';
import VideoUpload from './components/VideoUpload';
import Dashboard from './components/dashboard/Dashboard';
import Nav from "./components/modules/Nav";

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Dashboard/>
      <h1>Deepfake Detection</h1>
      <VideoUpload />
    </div>
  );
}

export default App;
