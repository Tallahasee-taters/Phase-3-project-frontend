import React from 'react';

function Review({rating, text, character_id, location_id}) {
    return (
        <div>
           ★{rating} 
           <div>
            {text}
            </div>
        </div>
    );
}

export default Review;
