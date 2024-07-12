import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import Nav from '../modules/Nav';
import './log.css';
function Login() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div className='log'>
      <SignIn />
      </div>
    </div>
  );
}

export default Login;
