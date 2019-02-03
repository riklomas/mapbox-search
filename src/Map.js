import React, { Component } from 'react';
import mapbox from 'mapbox-gl'
import './Map.css'

class Map extends Component {

  componentDidMount() {
    const app = this.props.app

    mapbox.accessToken = 'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg'

    const map = new mapbox.Map({
      container: 'map',
      style: app.state.style,
      center: [
        app.state.longitude, 
        app.state.latitude
      ],
      zoom: 12
    });

    const navigationControl = new mapbox.NavigationControl()

    map.addControl(navigationControl)

    this.props.app.setState({
      map: map
    })
  }


  render() {
    const app = this.props.app
    const map = app.state.map

    if (map) {
      map.setStyle(app.state.style)
    }


    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;