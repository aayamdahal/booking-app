import React from 'react';
import '../../App.css';

const Navbar = () => {
  return (
    <div className='topnav'>
      <a
        className='active'
        href='#home'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        Booking App
      </a>
      <div className='login-container'>
        <form>
          <button type='submit' >Login</button>
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
