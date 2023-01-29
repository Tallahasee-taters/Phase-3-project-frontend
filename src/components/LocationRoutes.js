import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailContainer from './DetailContainer';

function LocationRoutes({locations, reviews, characters, locationPath}){
    const mappedRoutes = locations.map(location => <Route exact path = {`/locations/${location.id}`} element={<DetailContainer reviews={reviews} characters={characters} locationPath={locationPath} key={`Route-${location.id}`}/>} />)
    return (
        <Routes>
            {mappedRoutes}
        </Routes>
    );
}

export default LocationRoutes;
