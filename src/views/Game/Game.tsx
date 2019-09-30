import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from 'styled-components';
import { H1 } from '../../components/Headings/Headings';
import PlayerTable from '../../components/PlayerTable/PlayerTable';
import Button from '../../components/Button/Button';
import PokerChip, { chipValues } from '../../components/PokerChip/PokerChip';
import PokerChipSection from '../../components/PokerChipSection/PokerChipSection';

interface GameProps {
  /**
   * Id of the poker room
   */
  id: string;
}

interface GameTableProps {
  id: string;
  players: any[];
  goToGameView: (args: any) => void;
}

const GameTable = (props: GameTableProps) => {
  return (
    <section>
      <H1>Room #{props.id}</H1>
      <PlayerTable players={props.players} />
      <Button onClick={props.goToGameView}>Game View</Button>
    </section>
  );
};

const GameLog = styled.div`
  height: 20rem;
  background: rgba(255, 255, 255, 0.4);
`;

const GameView = () => {
  const potTotal = 1000;
  const playerName = 'Jimmy';
  const playerChips = 50000;

  return (
    <section>
      <header>
        <H1>Pot: { potTotal }</H1>
        <Button>Settle</Button>
      </header>
      <GameLog />
      <div>
        <Button>Buy In</Button>
        <p>{ playerName }: { playerChips }</p>
        <Button>Change</Button>
      </div>
      <PokerChipSection>
        { chipValues.map((chipValue) => {
          return (
            <PokerChip
              key={chipValue}
              chipValue={chipValue as any}
              onClick={(args: any) => {}}
            />
          );
        }) }
      </PokerChipSection>
    </section>
  );
};

const Game = (props: RouteComponentProps<GameProps>) => {
  const [state, setState] = useState({
    view: 'table',
  });

  const goToGameView = () => {
    setState({
      ...state,
      view: 'game',
    });
  };

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

  const gameTable = (
    <GameTable 
      id={props.id!}
      players={players}
      goToGameView={goToGameView}
    />
  );

  const gameView = <GameView />;

  return state.view === 'table' ? gameTable : gameView;
};

export default Game;