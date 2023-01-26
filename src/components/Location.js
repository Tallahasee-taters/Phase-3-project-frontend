import React, {useState, useEffect} from 'react';
import Review from './Review';

function Location({id, inhabitants, terrain, name, reviews}){

    const mappedReviews = reviews?.map(review => <Review key={review.id} {...review}/>)
    // useEffect(() => {
    //     fetch("http://localhost:9292/reviews")
    //     .then(resp => resp.json())
    //     .then(setReviews)
    //   }, [])
// debugger
    return (
        <div>
            
            
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

