import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailContainer from './DetailContainer';

function LocationRoutes({locations, reviews, characters, locationPath, setReviews, setLocations}){
    const mappedRoutes = locations.map(location => <Route exact path = {`/locations/${location.id}`} element={<DetailContainer setReviews={setReviews} setLocations={setLocations} reviews={reviews} characters={characters} locations={locations} locationPath={locationPath} key={`Route-${location.id}`}/>} />)
    return (
        <Routes>
            {mappedRoutes}
        </Routes>
    );
}

export default LocationRoutes;
