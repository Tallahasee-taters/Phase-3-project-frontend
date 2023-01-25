import React from 'react';
import Location from './Location';

function LocationList({locations}) {
    const mappedLocations = locations.map(location => <Location key={location.id} {...location}/>)
    return (
        <div>
            {mappedLocations}
        </div>
    );
};

export default LocationList;
