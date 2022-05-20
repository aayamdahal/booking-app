import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='topnav'>
      <div className='logo-header'>
        <a
          className='active'
          href='#home'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div
            className='logo-header'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faHotel} />
            <span
              style={{
                marginLeft: '8px',
              }}
            >
              Booking App
            </span>
          </div>
        </a>
      </div>
      <div className='login-container'>
        <form>
          <button type='submit'>Login</button>
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
