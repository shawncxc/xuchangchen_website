import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import JumbotronStyle from 'style/jumbotron.scss';

export default class MainJumbotron extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Jumbotron>
        <p>Xuchang Chen</p>
        <p>I am a full-stack developer, and ...</p>
      </Jumbotron>
    );
  }
}