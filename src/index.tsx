import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button/Button';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Button onClick={() => {}}>Hello world</Button>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
