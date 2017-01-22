import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Media from 'react-bootstrap/lib/Media';
import Image from 'react-bootstrap/lib/Image';
import Paper from 'material-ui/Paper';
import OverviewStyle from 'style/overview.scss';

// Img
import XuchangChenImg from 'asset/xuchangchen.jpg';
import IMG_1 from 'asset/IMG_1.jpg';
import IMG_2 from 'asset/IMG_2.jpg';
import IMG_3 from 'asset/IMG_3.jpg';
import IMG_4 from 'asset/IMG_4.jpg';
import IMG_5 from 'asset/IMG_5.jpg';
import IMG_6 from 'asset/IMG_6.jpg';
import IMG_7 from 'asset/IMG_7.jpg';

export default class Overview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Left>
                <Image width={200} height={200} src={IMG_1} alt="Image" circle/>
              </Media.Left>
              <Media.Body>
                <Media.Heading className="overview-title">I love San Francisco!</Media.Heading>
                <p className="overview-content">I live here and I am proud of being part of this awesome place.</p>
              </Media.Body>
            </Media>
          </Paper>
        </Col>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Left>
                <Image width={200} height={200} src={IMG_2} alt="Image" circle/>
              </Media.Left>
              <Media.Body>
                <Media.Heading className="overview-title">I am a fearless full-stack developer!</Media.Heading>
                <p className="overview-content">
                  As a developer, I work from frontend to backend, and write my own unit tests, 
                  sometimes even integration tests.
                </p>
              </Media.Body>
            </Media>
          </Paper>
        </Col>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Body>
                <Media.Heading className="overview-title">A Foodie</Media.Heading>
                <p className="overview-content">
                  Always wanna try different kinds of food, Sushi, Dim Sum, Hot Pot, Hamburger, Pizza ...
                </p>
              </Media.Body>
              <Media.Right>
                <Image width={200} height={200} className="rotate90" src={IMG_7} alt="Image" circle/>
              </Media.Right>
            </Media>
          </Paper>
        </Col>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Body>
                <Media.Heading className="overview-title">Coffee Addict</Media.Heading>
                <p className="overview-content">Like all developers, coffee everyday.</p>
              </Media.Body>
              <Media.Right>
                <Image width={200} height={200} src={IMG_6} alt="Image" circle/>
              </Media.Right>
            </Media>
          </Paper>
        </Col>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Left>
                <Image width={200} height={200} src={IMG_4} alt="Image" circle/>
              </Media.Left>
              <Media.Body>
                <Media.Heading className="overview-title">My MurMur</Media.Heading>
                <p className="overview-content">I have a little son who likes chicken and hates taking shower.</p>
              </Media.Body>
            </Media>
          </Paper>
        </Col>
        <Col xs={12} md={6}>
          <Paper className="md-overview-paper" zDepth={2} rounded={false}>
            <Media>
              <Media.Left>
                <Image width={200} height={200} src={XuchangChenImg} alt="Image" circle/>
              </Media.Left>
              <Media.Body>
                <Media.Heading className="overview-title">Wanna Know More?</Media.Heading>
                <p className="overview-content">
                  Check out <a href="https://www.linkedin.com/in/xuchangchen">here</a> and <a href="https://github.com/shawncxc">here</a>.
                </p>
              </Media.Body>
            </Media>
          </Paper>
        </Col>
      </div>
    );
  }
}
