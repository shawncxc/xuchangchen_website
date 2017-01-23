// Module
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

// Style
import NabarStyle from 'style/navbar.scss';

export default class BottomNavbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" style={{ fontSize: 12 }}>Copyright Xuchang Chen 2017</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
