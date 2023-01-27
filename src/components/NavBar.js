import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink to='welcomePage'>
            <p className='NavBar'>
                Return to title
            </p>
            </NavLink>
        </div>
    );
}

export default NavBar;
