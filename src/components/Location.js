import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Review from './Review';

function Location({id, inhabitants, terrain, name, reviews, img_url}){

    const mappedReviews = reviews?.map(review => <Review key={review.id} {...review}/>)
    // useEffect(() => {
    //     fetch("http://localhost:9292/reviews")
    //     .then(resp => resp.json())
    //     .then(setReviews)
    //   }, [])
// debugger
    return (
        <div>
            <div>
            <NavLink to="welcomePage">
                <button>Leave Middle Earth</button>
            </NavLink>
            </div>
            <div className='image_placement'>
                <img className="location_image" alt = "location_image" src = {img_url}></img>
            </div>
            <div className='location_details'>
                <span className="text"> {name} </span>
                <span className="text"> {terrain} </span>
                <span className="text"> {inhabitants} </span>
            </div>
            <div className='reviews'>
             {mappedReviews}
            </div>
        </div>
    );
}

export default Location;

