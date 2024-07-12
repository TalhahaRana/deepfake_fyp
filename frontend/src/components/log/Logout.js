// import React, { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';

// const Logout = () => {
//   const { signOut } = useUser();

//   useEffect(() => {
//     const logout = async () => {
//       try {
//         await signOut();
//       } catch (error) {
//         console.error('Failed to logout:', error);
//       }
//     };

//     logout();
//   }, [signOut]);

//   return <Navigate to="/" replace />;
// };

// export default Logout;


import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const Logout = () => {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
      // Perform any additional cleanup or state management after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

