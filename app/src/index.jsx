import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'component/App';
import Main from 'component/Main/Main';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute name="main" component={ Main } />
    </Route>
  </Router>,
document.getElementById('app'));
