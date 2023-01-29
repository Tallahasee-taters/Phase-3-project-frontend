import React from 'react';

function Character({character, review}) {
   const url = window.location.href
   const split = url.split("/")
    const finalSplit = split.at(-1)
    return (
        <div>
            {parseInt(finalSplit) === review.location_id ? 
            <><div>{review.character_id === character.id ? character.name : null}</div> <div>{review.character_id === character.id ? character.description : null}</div></> 
            : null}
        </div>
    );
}

export default Character;
