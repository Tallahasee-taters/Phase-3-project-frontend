import React from 'react';
import {useEffect, useState} from 'react'

function Review({rating, text, character_id, location_id, review}) {
    return (
        <div> 
           <div>
            {text}
            {character_id}
            </div>
        </div>
    );
}

export default Review;
