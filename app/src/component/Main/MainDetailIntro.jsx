import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import DetailIntro from 'style/detailIntro.scss';

export default class MainDetailIntro extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Paper zDepth={2} rounded={false} className="detail-intro">
        <h3>My Skills: </h3>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          Node.js
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          React
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          Meteor.js
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          Webpack
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          Redux
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>JS</Avatar>
          Mocha
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>DB</Avatar>
          MongoDB
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>DB</Avatar>
          ElasticSearch
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>RS</Avatar>
          RESTful API
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>TE</Avatar>
          Unit Test
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>AS</Avatar>
          AWS S3
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>AS</Avatar>
          AWS EC2
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>HL</Avatar>
          HTML
        </Chip>
        <Chip className="skill-chip">
          <Avatar size={32}>CS</Avatar>
          CSS
        </Chip>
      </Paper>
    );
  }
}