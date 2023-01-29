import React from 'react';
import Review from './Review';
import NewReviewForm from './NewReviewForm';

function DetailContainer({reviews, characters}) {
    console.log(window.location.href)
    const locationPath = window.location.href.slice(32)
    const filteredReviews = reviews.filter(review => review.location_id == locationPath)
    const mappedReviews = filteredReviews.map(review => <Review review={review} character={review.character} key={review.id} />)
    return (
        <div>
            {mappedReviews}
            <NewReviewForm />
            
        </div>
    );
}

export default DetailContainer;
