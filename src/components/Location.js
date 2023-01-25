import React from 'react';

function Location({id, inhabitants, terrain, name, reviews}){
    return (
        <div>
            <span className="text"> {name} </span>
            <span className="text"> {terrain} </span>
            <span className="text"> {inhabitants} </span>
        </div>
    );
}

export default Location;

