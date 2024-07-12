// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route, useNavigate, Router } from 'react-router-dom';
// import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut, SignUp } from '@clerk/clerk-react'
// import ProtectedPage from './ProtectedPage';
// // Import your publishable key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const ClerkWithRoute = () => {
//  const navigate = useNavigate()
//  return
//  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
//   <Routes>
//     <Route  path='/' element={<App/>} />
//     <Route path="SignIn" element={< SignIn routing = "path" path ="/sign-in"/>}/>
//     <Route path="SignUp" element={< SignUp routing = "path" path ="/sign-up"/>}/>
//     <Route
//     path = "/protected"
//     element = {
//       <>
//       <SignedIn>
//         <ProtectedPage/>
//       </SignedIn>
//       <SignedOut>
//         <RedirectToSignIn/>
//       </SignedOut>
//       </>
//     }
//     />
//   </Routes>
//  </ClerkProvider>
// }

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App/>
//       <ClerkWithRoute/>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// // Your Clerk frontend API key
// const clerkFrontendApi = 'pk_test_Z29sZGVuLXNoaW5lci02NC5jbGVyay5hY2NvdW50cy5kZXYk';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ClerkProvider frontendApi={clerkFrontendApi}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ClerkProvider>
//   </React.StrictMode>
// );

// reportWebVitals();


// src/index.js or src/main.js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ClerkProvider } from '@clerk/clerk-react';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

// // Import the environment variable
// const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ClerkProvider publishableKey={clerkPublishableKey}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ClerkProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();
