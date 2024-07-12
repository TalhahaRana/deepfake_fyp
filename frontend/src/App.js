// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Home from './components/Home';
// import Resources from "./components/work/Resources";
// import About from "./components/about/Aboutus";
// import Resource from "./components/resources/Resource";
// import Articlea from "./components/articles/Articlea";
// import Articleb from "./components/articles/Articleb";
// import Articlec from "./components/articles/Articlec";
// import Articled from "./components/articles/Articled";
// import Articlee from "./components/articles/Articlee";


// function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/resource" element={<Resource />} />
//         <Route path="/articlea" element={<Articlea />} />
//         <Route path="/articleb" element={<Articleb />} />
//         <Route path="/articlec" element={<Articlec />} />
//         <Route path="/articled" element={<Articled />} />
//         <Route path="/articlee" element={<Articlee />} />
//         <Route path="/login" element={<Login setToken={setToken} />} />
//         <Route path="/signup" element={<Signup setToken={setToken} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.js

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { SignIn, SignUp, SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/clerk-react';

// import Home from './components/Home';
// import Resources from "./components/work/Resources";
// import About from "./components/about/Aboutus";
// import Resource from "./components/resources/Resource";
// import Articlea from "./components/articles/Articlea";
// import Articleb from "./components/articles/Articleb";
// import Articlec from "./components/articles/Articlec";
// import Articled from "./components/articles/Articled";
// import Articlee from "./components/articles/Articlee";
// // import Nav from './components/Nav';
// function App() {
//   return (
//     <Router>
//       {/* <Nav /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/resource" element={<Resource />} />
//         <Route path="/articlea" element={<Articlea />} />
//         <Route path="/articleb" element={<Articleb />} />
//         <Route path="/articlec" element={<Articlec />} />
//         <Route path="/articled" element={<Articled />} />
//         <Route path="/articlee" element={<Articlee />} />
//         <Route path="/login" element={
//           <SignedOut>
//             <SignIn />
//           </SignedOut>
//         } />
//         <Route path="/signup" element={
//           <SignedOut>
//             <SignUp />
//           </SignedOut>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/App.js

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { SignIn, SignUp, SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/clerk-react';

// import Home from './components/Home';
// import Resources from "./components/work/Resources";
// import About from "./components/about/Aboutus";
// import Resource from "./components/resources/Resource";
// import Articlea from "./components/articles/Articlea";
// import Articleb from "./components/articles/Articleb";
// import Articlec from "./components/articles/Articlec";
// import Articled from "./components/articles/Articled";
// import Articlee from "./components/articles/Articlee";
// import VideoUpload from "./components/VideoUpload";
// import Nav from "./components/modules/Nav";
// function App() {
//   return (
//     <Router>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/resource" element={<Resource />} />
//         <Route path="/articlea" element={<Articlea />} />
//         <Route path="/articleb" element={<Articleb />} />
//         <Route path="/articlec" element={<Articlec />} />
//         <Route path="/articled" element={<Articled />} />
//         <Route path="/articlee" element={<Articlee />} />
        
//         {/* Protected route for VideoUpload */}
//         <Route path="/upload" element={
//           <>
//           <SignedIn>
//             <VideoUpload />
//           </SignedIn>
//           <SignedOut>
//             <RedirectToSignIn />
//           </SignedOut>
          

//           </>
//         } />

//         {/* Routes for login and signup */}
//         <Route path="/login" element={
//           <SignedOut>
//             <SignIn />
//           </SignedOut>
//         } />
//         <Route path="/signup" element={
//           <SignedOut>
//             <SignUp />
//           </SignedOut>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Nav from "./components/Nav";
// import Login from "./components/Login";
// import Home from './components/Home';
// import Resources from "./components/work/Resources";
// import About from "./components/about/Aboutus";
// import Resource from "./components/resources/Resource";
// import Articlea from "./components/articles/Articlea";
// import Articleb from "./components/articles/Articleb";
// import Articlec from "./components/articles/Articlec";
// import Articled from "./components/articles/Articled";
// import Articlee from "./components/articles/Articlee";

// function App() {
//   return (
//     <Router>
//       {/* <Nav /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/resource" element={<Resource />} />
//         <Route path="/articlea" element={<Articlea />} />
//         <Route path="/articleb" element={<Articleb />} />
//         <Route path="/articlec" element={<Articlec />} />
//         <Route path="/articled" element={<Articled />} />
//         <Route path="/articlee" element={<Articlee />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Nav from "./components/Nav";
// import Login from "./components/log/Login";
// import Home from './components/Home';
// import Resources from "./components/work/Resources";
// import About from "./components/about/Aboutus";
// import Resource from "./components/resources/Resource";
// import Articlea from "./components/articles/Articlea";
// import Articleb from "./components/articles/Articleb";
// import Articlec from "./components/articles/Articlec";
// import Articled from "./components/articles/Articled";
// import Articlee from "./components/articles/Articlee";
// import Logout from "./components/log/Logout"; // Add logout component

// function App() {
//   return (
//     <Router>
//       {/* <Nav /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/resource" element={<Resource />} />
//         <Route path="/articlea" element={<Articlea />} />
//         <Route path="/articleb" element={<Articleb />} />
//         <Route path="/articlec" element={<Articlec />} />
//         <Route path="/articled" element={<Articled />} />
//         <Route path="/articlee" element={<Articlee />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout />} /> {/* Add logout route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Nav from "./components/Nav";
import Home from './components/Home';
import Resources from "./components/work/Resources";
import About from "./components/about/Aboutus";
import Resource from "./components/resources/Resource";
import Articlea from "./components/articles/Articlea";
import Articleb from "./components/articles/Articleb";
import Articlec from "./components/articles/Articlec";
import Articled from "./components/articles/Articled";
import Articlee from "./components/articles/Articlee";
import Login from "./components/log/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {/* <Nav isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/articlea" element={<Articlea />} />
        <Route path="/articleb" element={<Articleb />} />
        <Route path="/articlec" element={<Articlec />} />
        <Route path="/articled" element={<Articled />} />
        <Route path="/articlee" element={<Articlee />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        {/* <Route path="/logout" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
