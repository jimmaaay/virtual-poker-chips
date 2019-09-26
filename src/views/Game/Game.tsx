import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { H1 } from '../../components/Headings/Headings';
import PlayerTable from '../../components/PlayerTable/PlayerTable';
import Button from '../../components/Button/Button';

interface GameProps {
  /**
   * Id of the poker room
   */
  id: string;
}

const Game = (props: RouteComponentProps<GameProps>) => {
  const players = [
    {
      id: 1,
      name: 'Jim Jam',
      buyIn: 50000,
      inHand: 50000,
      inPot: 0,
    },
    {
      id: 2,
      name: 'Ben',
      buyIn: 9000,
      inHand: 4000,
      inPot: 5000,
    },
  ];

  return (
    <section>
      <H1>Room #{props.id}</H1>
      <PlayerTable players={players} />
      <Button>Game View</Button>
    </section>
  );
};

export default Game;