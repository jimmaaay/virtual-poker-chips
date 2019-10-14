import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';

const Container = styled.main`
  padding: 2rem 1.5rem;
  max-width: 100rem;
  margin: 0 auto;
  min-height: 100vh;
  background: #333;
  color: #fff;
`;


ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <Container>
      <Router>
      </Router>
    </Container>
  </Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
