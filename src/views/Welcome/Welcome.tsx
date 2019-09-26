import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Button from '../../components/Button/Button';

const Welcome = (props: RouteComponentProps) => {
  return (
    <section>
      <Button>Start New Game</Button>
      <Button>Join Game</Button>
    </section>
  );
};


export default Welcome;