import React, { Component } from 'react';
import Map from './Map'
import Toggler from './Toggler'
import Search from './Search'
import PlacesPanel from './PlacesPanel'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      map: null,
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: [
        
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <PlacesPanel app={this}></PlacesPanel>
        <Search app={this}></Search>
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
      </div>
    );
  }
}

export default App;
