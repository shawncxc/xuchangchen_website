// Module
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Avatar from 'material-ui/Avatar';

// Img
import XuchangChenImg from 'asset/xuchangchen.jpg';
import LinkedinImg from 'asset/linkedin-sm.png';
import GithubImg from 'asset/github-sm.png';

// Style
import IconStyle from 'style/icon.scss';
import NabarStyle from 'style/navbar.scss';

export default class MainNavbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Avatar className="avatar" src={XuchangChenImg} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Xuchang Chen</NavItem>
            <NavItem eventKey={2} href="https://github.com/shawncxc">
              <img src={GithubImg} height="15" width="15" />
            </NavItem>
            <NavItem eventKey={3} href="https://www.linkedin.com/in/xuchangchen">
              <img src={LinkedinImg} height="15" width="15" />
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Find Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
