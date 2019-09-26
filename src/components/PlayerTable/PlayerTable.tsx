import React from 'react';
import styled from 'styled-components';

interface PlayerTableProps {
  players: Array<{
    id: number; // user id
    name: string;
    buyIn: number;
    inPot: number;
    inHand: number;
  }>
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  text-align: left;
  font-weight: 500;
  font-size: 1.4rem;
  border-bottom: 1px solid #fff;
  padding: 1rem 0.5rem;
`;

const NameTh = styled(StyledTh)`
  width: calc(40% - 5rem);
`;

const BuyInTh = styled(StyledTh)`
  width: 20%;
`;

const InPotTh = styled(StyledTh)`
  width: 20%;
`;

const InHandTh = styled(StyledTh)`
  width: 20%;
`;

const ActionsTh = styled(StyledTh)`
  width: 5rem;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  font-size: 1.4rem;
`;

const PlayerTable = (props: PlayerTableProps) => (
  <StyledTable>
    <thead>
      <tr>
        <NameTh>Name</NameTh>
        <BuyInTh>Buy In</BuyInTh>
        <InPotTh>In Pot</InPotTh>
        <InHandTh>In Hand</InHandTh>
        <ActionsTh></ActionsTh>
      </tr>
    </thead>
    <tbody>
      { props.players.map((player) => {
        const { name, buyIn, id, inPot, inHand } = player;
        return (
          <tr key={id}>
            <StyledTd>{name}</StyledTd>
            <StyledTd>{buyIn}</StyledTd>
            <StyledTd>{inPot}</StyledTd>
            <StyledTd>{inHand}</StyledTd>
            <StyledTd>...</StyledTd>
          </tr>
        );
      }) }
    </tbody>
  </StyledTable>
);

export default PlayerTable;