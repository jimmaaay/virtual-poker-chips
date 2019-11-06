import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { PlayerTable } from '@texas/components/atoms/PlayerTable/PlayerTable';
import { styles } from './TableView.styles';

const StyledTableView = styled.div`
  ${styles}
`;

export interface TableViewProps {
  /**
   * The child nodes
   */
  children?: ReactNode;

  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const TableView = (props: TableViewProps) => {
  const { children } = props;
  const players = [{
    id: 1,
    name: 'Jimmy',
    buyIn: 5000,
    inPot: 500,
    inHand: 4500,
  }, {
    id: 1,
    name: 'Ben',
    buyIn: 5000,
    inPot: 100,
    inHand: 4900,
  }];

  return (
    <StyledTableView {...props}>
      <PlayerTable
        players={players}
      />
    </StyledTableView>
  );
};



