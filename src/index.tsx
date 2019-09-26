import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import Button from './components/Button/Button';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Button onClick={() => {}}>Hello world</Button>
  </Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
