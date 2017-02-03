import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Map from './Map/Map';

export default class Contactme extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Well>
        <h3>Contact Me</h3>
        <Map />
      </Well>
    );
  }
}