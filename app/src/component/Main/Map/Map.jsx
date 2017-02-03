import React from 'react';
import GoogleMap from 'google-map-react';
import config from 'root/config.json';
import theme from './theme.json';
import Marker from './Marker';
 
export default class Map extends React.Component {
  constructor() {
    super();
    this.center = { lat: 37.7676457, lng: -122.4184106 };
    this.zoom = 9;
    this.clickMap = this.clickMap.bind(this);
  }

  clickMap(event) {
    console.log(event);
  }

  render() {
    return (
      <GoogleMap 
        bootstrapURLKeys={{ key: config.google_map_api_key, language: 'en' }}
        options={{ styles: theme }}
        defaultCenter={ this.center }
        defaultZoom={ this.zoom }
        onClick={ this.clickMap }
        style={{ height: 500, position: 'relative' }}
      >
        <Marker lat={37.77063100647983} lng={-122.41871100740968} />
      </GoogleMap>
    );
  }
}