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
import Character from './components/Character';
import DetailContainer from './components/DetailContainer';

function App() {
  const [locations, setLocations] = useState([])
  const [reviews, setReviews] = useState([])
  const [characters, setCharacters] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:9292/locations")
    .then(resp => resp.json())
    .then(setLocations)
  }, [])

    useEffect(() => {
        fetch('http://localhost:9292/reviews')
        .then(resp => resp.json())
        .then(setReviews)
    }, []);

    useEffect(() => {
      fetch('http://localhost:9292/characters')
      .then(resp => resp.json())
      .then(setCharacters)
  }, []);

    const mappedReviews = reviews.map((review) => {
      return <DetailContainer key={review.id} review={review} characters={characters}/>
    })

     const mappedLocations = locations.map((location) => {return <Location key={location.id} {...location}/>
    })
  



  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path = '/welcome-Page'>
         <Header className='background-header'/>
        </Route>
        <Route exact path = '/home-page'>
          {mappedLocations}
          {/* <NewCharacterForm /> */}
        </Route>
        <Route exact path = '/locations/:locationId'>
          {mappedReviews}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
