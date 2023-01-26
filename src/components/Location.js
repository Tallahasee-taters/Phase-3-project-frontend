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
            <div>
                <span className="text"> {name} </span>
            </div>
            <div>
            <span className="text"> {terrain} </span>
            </div>
            <div>
            <span className="text"> {inhabitants} </span>
            </div>
            <div>
            {mappedReviews}
            </div>
        </div>
    );
}

export default Location;

