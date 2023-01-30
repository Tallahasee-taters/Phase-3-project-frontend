import React from 'react';
import Review from './Review';
import NewReviewForm from './NewReviewForm';

function DetailContainer({reviews, characters, setReviews, setLocations}) {
    console.log(window.location.href)
    const locationPath = window.location.href.slice(32)
    const filteredReviews = reviews.filter(review => review.location_id == locationPath)
    const mappedReviews = filteredReviews.map(review => <Review setReviews={setReviews} setLocations={setLocations} review={review} character={review.character} key={review.id} />)
    return (
        <div>
            {mappedReviews}
            <NewReviewForm locationPath={locationPath} characters={characters} setReviews={setReviews}/>
        </div>
    );
}

export default DetailContainer;
