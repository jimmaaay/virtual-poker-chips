import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Heading, HeadingSize } from '../../atoms/Heading/Heading';
import { styles } from './Layout.styles';

const StyledLayout = styled.div`
  ${styles}
`;

export interface LayoutProps {
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


export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <StyledLayout {...props}>
      <header className="header">
        <div className="wrapper">
          <Heading size={HeadingSize.H3} className="title">Virtual poker chips</Heading>
        </div>
      </header>
      <main className="wrapper main">
        { children }
      </main>
    </StyledLayout>
  );
};



