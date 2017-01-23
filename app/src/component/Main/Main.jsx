import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MainNavbar from './MainNavbar';
import MainJumbotron from './MainJumbotron';
import Overview from './Overview';
import MainDetailIntro from './MainDetailIntro';
import Contactme from './Contactme';
import BottomNavbar from './BottomNavbar';
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
        <Row className="main-detail-intro"><MainDetailIntro /></Row>
        <Row className="main-contact-me"><Contactme /></Row>
        <Row className="main-bottom-navbar"><BottomNavbar /></Row>
      </div>
    );
  }
}
