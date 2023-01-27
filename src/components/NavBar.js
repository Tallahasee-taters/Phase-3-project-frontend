import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='/welcome-page'>
            <p className='NavBar'>
                Return to title
            </p>
            </NavLink>
        </div>
    );
}

export default NavBar;
