import React from 'react';
import {useEffect, useState} from 'react'

function Review({character, review}) {
    return (
        <div> 
           <div>
            {character.name}
            {review.text}
            {review.rating}
            </div>
        </div>
    );
}

export default Review;
