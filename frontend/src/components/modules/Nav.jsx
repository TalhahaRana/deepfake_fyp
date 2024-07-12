// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import './nav.css';
// import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

// const Nav = () => {
//   return (
//     <div className='nav'>
//       <div className='logo'>
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className='link'>
//         <p>
//           <Link to='/'>Home</Link>
//         </p>
//         <p>
//           <Link to='/Resources'>How It Works</Link>
//         </p>
//         <p>
//           <Link to='/Resource'>Resources</Link>
//         </p>
//         <p>
//           <Link to='/about'>About</Link>
//         </p>
//         <SignedOut>
//           <p>
//             <Link to='/login'>Login</Link>
//           </p>
//           <p>
//             <Link to='/signup'>Signup</Link>
//           </p>
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   );
// }

// export default Nav;


// src/components/Nav.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
// import './nav.css';

// const Nav = () => {
//   return (
//     <div className='nav'>
//       <div className='logo'>
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className='link'>
//         <p>
//           <Link to='/'>Home</Link>
//         </p>
//         <p>
//           <Link to='/resources'>Resources</Link>
//         </p>
//         <p>
//           <Link to='/about'>About</Link>
//         </p>
//         <SignedOut>
//           <p>
//             <Link to='/login'>Login</Link>
//           </p>
//           <p>
//             <Link to='/signup'>Signup</Link>
//           </p>
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   );
// }

// export default Nav;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import './nav.css';

// const Nav = () => {
//   return (
//     <div className='nav'>
//       <div className='logo'>
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className='link'>
//         <p>
//           <Link to='/'>Home</Link>
//         </p>
//         <p>
//           <Link to='/resource'>Resources</Link>
//         </p>
//         <p>
//           <Link to='/about'>About</Link>
//         </p>
//         <p>
//            <Link to='/Resources'>Working</Link>
//         </p>
//         <p>
//           <Link to='/login'>Login</Link>
//         </p>
//         {/* <p>
//           <Link to='/signup'>Signup</Link>
//         </p> */}
//       </div>
//     </div>
//   );
// }

// export default Nav;


// import React from 'react';
// import logo from '../assets/logo.png';
// import './nav.css';
// import { Link } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';

// const Nav = () => {
//   const { signOut } = useUser();

//   const handleLogout = async () => {
//     try {
//       await signOut();
//     } catch (error) {
//       console.error('Failed to logout:', error);
//     }
//   };

//   return (
//     <div className='nav'>
//       <div className='logo'>
//         <img src={logo} alt="Logo"/>
//       </div>
//       <div className='link'>
//         <p>
//           <Link to="/">Home</Link>
//         </p>
//         <p>
//           <Link to="/resource">Resources</Link>
//         </p>
//         <p>
//           <Link to="/about">About</Link>
//         </p>
//         <p>
//             <Link to='/Resources'>Working</Link>
//        </p>
//         <p>
//           <Link to="/login">Login</Link>
//         </p>
//         {/* <p>
//           <button onClick={handleLogout}>Logout</button>
//         </p> */}
//       </div>
//     </div>
//   );
// }

// export default Nav;


import React from 'react';
import logo from '../assets/logo.png';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt="Logo"/>
      </div>
      <div className='link'>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/resource">Resources</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to='/resources'>Working</Link>
        </p>
        {isLoggedIn ? (
          <p>
            <button onClick={handleLogout}>Logout</button>
          </p>
        ) : (
          <p>
            <Link to="/login">Login</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Nav;
