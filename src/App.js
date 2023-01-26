import './App.css';
import {useEffect, useState} from 'react'
import LocationList from './components/LocationList';
import Location from './components/Location';
import Header from './components/Header';
// import {Route, Switch} from 'react-router-dom';
import Review from './components/Review';
import React from 'react';
import { Route, Switch} from 'react-router-dom';

function App() {
  const [locations, setLocations] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
    .then(resp => resp.json())
    .then(setLocations)
  }, [])
  



  return (
    <div className="App">
      <Switch>
        <Route exact path = '/welcomePage'>
         <Header />
        </Route>
        <Route exact path = '/homePage'>
          <LocationList locations = {locations}/>
          <Location />
          <Review />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
