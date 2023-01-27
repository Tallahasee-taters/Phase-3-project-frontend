import React from 'react';
import Location from './Location';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

function LocationList({locations}) {
    const mappedLocations = locations.map(location => <Location key={location.id} {...location}/>)
    return (
        <div className='body'>
            <Card.Group >
            {mappedLocations}
            </Card.Group>
        </div>
    );
};

export default LocationList;
