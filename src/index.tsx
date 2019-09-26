import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import Welcome from './views/Welcome/Welcome';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Welcome />
  </Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
