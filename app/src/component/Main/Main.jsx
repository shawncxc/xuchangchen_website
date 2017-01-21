import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MainNavbar from './MainNavbar';
import Overview from './Overview';
import MainStyle from 'style/main.scss';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <Row className="main-navbar"><MainNavbar /></Row>
        <Row className="main-overview"><Overview /></Row>
        <Row></Row>
      </div>
    );
  }
}
