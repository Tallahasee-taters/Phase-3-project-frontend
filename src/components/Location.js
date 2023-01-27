import React, {useState, useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import Review from './Review';
import { Card, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Location({id, inhabitants, terrain, name, reviews, img_url, average_rating}){

    const mappedReviews = reviews?.map(review => <Review key={review.id} {...review}/>)
    // useEffect(() => {
    //     fetch("http://localhost:9292/reviews")
    //     .then(resp => resp.json())
    //     .then(setReviews)
    //   }, [])
// debugger
    return (
        <Card className='locationCard'
    href='#card-example-link-card'
    header={name}
    meta={inhabitants}
    description={terrain}
  />
    );
}

export default Location;

