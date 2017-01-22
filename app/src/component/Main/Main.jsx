import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MainNavbar from './MainNavbar';
import MainJumbotron from './MainJumbotron';
import Overview from './Overview';
import MainCarousel from './MainCarousel';
import MainStyle from 'style/main.scss';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <Row className="main-navbar"><MainNavbar /></Row>
        <Row className="main-jumbotron"><MainJumbotron /></Row>
        <Row className="main-overview"><Overview /></Row>
        <Row><MainCarousel /></Row>
      </div>
    );
  }
}
