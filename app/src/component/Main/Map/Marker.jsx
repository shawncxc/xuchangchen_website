import React from 'react';
import SimpleMarkerStyle from 'style/simple_marker.scss';

export default class Marker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="simple-marker" style={{ width: 20, height: 20 }}></div>
    );
  }
}