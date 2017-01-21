import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Media from 'react-bootstrap/lib/Media';
import Image from 'react-bootstrap/lib/Image';
import Paper from 'material-ui/Paper';
import OverviewStyle from 'style/overview.scss';

// Img
import IMG_1 from 'asset/IMG_1.jpg';
import IMG_2 from 'asset/IMG_2.jpg';
import IMG_3 from 'asset/IMG_3.jpg';
import IMG_4 from 'asset/IMG_4.jpg';
import IMG_5 from 'asset/IMG_5.jpg';

export default class Overview extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Paper className="md-overview-paper" zDepth={2} rounded={false}>
          <Media>
            <Media.Left>
              <Image width={300} height={300} src={IMG_1} alt="Image" circle/>
            </Media.Left>
            <Media.Body>
              <Media.Heading className="overview-title">Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Paper>
        <Paper className="md-overview-paper" zDepth={2} rounded={false}>
          <Media>
            <Media.Body>
              <Media.Heading className="overview-title">Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
            <Media.Right>
              <Image width={300} height={300} src={IMG_2} alt="Image" circle/>
            </Media.Right>
          </Media>
        </Paper>
        <Paper className="md-overview-paper" zDepth={2} rounded={false}>
          <Media>
            <Media.Left>
              <Image width={300} height={300} className="rotate90" src={IMG_3} alt="Image" circle/>
            </Media.Left>
            <Media.Body>
              <Media.Heading className="overview-title">Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Paper>
        <Paper className="md-overview-paper" zDepth={2} rounded={false}>
          <Media>
            <Media.Body>
              <Media.Heading className="overview-title">Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
            <Media.Right>
              <Image width={300} height={230} className="rotate90" src={IMG_4} alt="Image" circle/>
            </Media.Right>
          </Media>
        </Paper>
        <Paper className="md-overview-paper" zDepth={2} rounded={false}>
          <Media>
            <Media.Left>
              <Image width={300} height={230} className="rotate90" src={IMG_5} alt="Image" circle/>
            </Media.Left>
            <Media.Body>
              <Media.Heading className="overview-title">Media Heading</Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </Media.Body>
          </Media>
        </Paper>
      </div>
    );
  }
}
