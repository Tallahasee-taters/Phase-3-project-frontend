import React from 'react';
import { NavLink } from 'react-router-dom';
import NewCharacterForm from './NewCharacterForm';

function Header ({characters}) {
    // const handleClick = 
    return (
        <div className="Header">
            <div className="header">
                {/* <img alt="welcome_img" src=""></img> */}
                <img className='background_img' alt='background_img' src='https://kappafon.github.io/quote-generator/images/aNormalRing_cvlnam.png'></img>
                <NavLink to='/home-page' className='homePageButton'>
                    Explore Middle Earth
                </NavLink>
                <NewCharacterForm />
            </div>  
        </div>
    )
}

export default Header;
