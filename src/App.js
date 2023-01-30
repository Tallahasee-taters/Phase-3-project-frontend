import './App.css';
import {useEffect, useState} from 'react'
import LocationList from './components/LocationList';
import Location from './components/Location';
import Header from './components/Header';
// import {Route, Switch} from 'react-router-dom';
import Review from './components/Review';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NewCharacterForm from './components/NewCharacterForm'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import LocationRoutes from './components/LocationRoutes';

function App() {
  const [locations, setLocations] = useState([])
  const [reviews, setReviews] = useState([])
  const [characters, setCharacters] = useState([])
  const [locationPath, setLocationPath] = useState(0)
  

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

    

     
  



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path = '/welcome-Page' element={<Header className='background-header'/>} />
        <Route exact path = '/home-page' element={<LocationList locations={locations} setLocationPath={setLocationPath}/>} />
        <Route path ="*" element = {<LocationRoutes locations={locations} reviews={reviews} characters={characters} locationPath={locationPath} setReviews={setReviews} setLocations={setLocations}/>} />
        {/* <Route exact path = {`/locations/${locationPath}`} element={<DetailContainer reviews={reviews} characters={characters} locationPath={locationPath}/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
