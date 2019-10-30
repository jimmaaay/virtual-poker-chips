import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '@texas/components/atoms/Button/Button';
import { styles } from './Home.styles';

const StyledHome = styled.div`
  ${styles}
`;

export interface HomeProps {
  /**
   * The class to add to the component
   */
  className?: string;

  /**
   * The data-testid to add to the component
   */
  'data-testid'?: string;
}


export const Home = (props: HomeProps) => {

  return (
    <StyledHome {...props}>
      <div className="buttons">
        <Button className="start-button">Start New Game</Button>
        <Button className="join-button">Join By Game Code</Button>
      </div>
    </StyledHome>
  );
};



