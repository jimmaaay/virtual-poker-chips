import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { H1 } from '../../components/Headings/Headings';

interface GameProps {
  /**
   * Id of the poker room
   */
  id: string;
}

const Game = (props: RouteComponentProps<GameProps>) => {
  return (
    <section>
      <H1>Room #{props.id}</H1>
    </section>
  );
};

export default Game;