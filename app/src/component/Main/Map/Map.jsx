import React from 'react';
import GoogleMap from 'google-map-react';
import config from 'root/config.json';
 
export default class Map extends React.Component {
  constructor() {
    super();
    this.center = { lat: 37.7676457, lng: -122.4184106 };
    this.zoom = 9;
  }

  render() {
    return (
      <GoogleMap 
        bootstrapURLKeys={{ key: config.google_map_api_key, language: 'en' }}
        defaultCenter={ this.center }
        defaultZoom={ this.zoom }
        style={{ height: 500, position: 'relative' }}
      >
      </GoogleMap>
    );
  }
}