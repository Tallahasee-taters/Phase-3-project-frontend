import './App.css';
import {useEffect, useState} from 'react'
import LocationList from './components/LocationList';
import Location from './components/Location';
import Header from './components/Header';
// import {Route, Switch} from 'react-router-dom';
import Review from './components/Review';
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import NewCharacterForm from './components/NewCharacterForm'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'

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
        <NavBar />
         <Header className='background_header'/>
        </Route>
        <Route exact path = '/homePage'>
        <NavBar />
          <LocationList locations = {locations}/>
          <Location />
          <Review />
          <NewCharacterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
