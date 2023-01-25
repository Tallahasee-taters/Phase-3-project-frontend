import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import LocationList from './components/LocationList';
import Location from './'

function App() {
  const [locations, setLocations] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/locations")
    .then(resp => resp.json())
    .then(setLocations)
  }, [])


  return (
    <div className="App">
      <LocationList getLocations = {locations}/>
      <Location />
    </div>
  );
}

export default App;
