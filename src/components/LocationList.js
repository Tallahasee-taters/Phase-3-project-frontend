import React from 'react';
import Location from './Location'
import { Card } from 'semantic-ui-react';

function LocationList({locations, setLocationPath}) {
    const mappedLocations = locations.map((location) => {return <Location key={location.id} {...location} setLocationPath={setLocationPath}/>
    })
    return(
        <div className='body'>
            {mappedLocations}
        </div>
    );
};

export default LocationList;
