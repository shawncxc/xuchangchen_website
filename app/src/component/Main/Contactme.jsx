import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Map from './Map/Map';
import contactmeStyle from 'style/contactme.scss';

export default class Contactme extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Well className="contactme">
        <h3 className="contactme-title">Contact Me</h3>
        <Map />
      </Well>
    );
  }
}