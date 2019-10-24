---
to: src/components/<%= h.getComponentDirectory(type) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { styles } from './<%= h.changeCase.pascal(name) %>.styles';

const Styled<%= h.changeCase.pascal(name) %> = styled.div`
  ${styles}
`;

export interface <%= h.changeCase.pascal(name) %>Props {
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


export const <%= h.changeCase.pascal(name) %> = (props: <%= h.changeCase.pascal(name) %>Props) => {
  const { children } = props;

  return (
    <Styled<%= h.changeCase.pascal(name) %> {...props}>
      { children }
    </Styled<%= h.changeCase.pascal(name) %>>
  );
};



