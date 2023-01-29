import React from 'react';
import Character from './Character';
import Review from './Review';

function DetailContainer({review, characters}) {
    const mappedCharacters = characters.map((character) => 
     {return <Character review={review} character={character} key={character.id} />})

    return (
        <div>
            <Review review={review}/>
            {mappedCharacters}
        </div>
    );
}

export default DetailContainer;
