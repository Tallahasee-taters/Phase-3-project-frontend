import React from 'react';
import { NavLink } from 'react-router-dom';

function Header () {
    // const handleClick = 
    return (
        <div className="Header">
            <div className="header">
                <h1>Lord of the Yelps</h1>
                <NavLink to='/homePage'>
                    <button>Explore Middle Earth</button>
                </NavLink>
            </div>  
        </div>
    )
}

export default Header;
