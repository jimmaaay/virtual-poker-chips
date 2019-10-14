import React from 'react';
import PlayerTable from './PlayerTable';

export default {
  title: 'PlayerTable',
  component: PlayerTable,
};

export const thing = () => {
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
    <div style={{width: '100vw', margin: 0, padding: '0 2rem'}}>
      <PlayerTable players={players}/>
    </div>
  );
}