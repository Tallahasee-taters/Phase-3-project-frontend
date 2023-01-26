import React from 'react';

function Review({rating, text, character_id, location_id}) {
    return (
        <div>
            {rating} {text}
        </div>
    );
}

export default Review;
