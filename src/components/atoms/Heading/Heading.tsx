import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { styles } from './Heading.styles';

/**
 * Heading font sizes were generated from https://type-scale.com using the Minor third option
 */

const StyledHeading = styled.h1`
  ${styles}
`

export enum HeadingSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export interface HeadingProps {
  /**
   * Size of the heading
   * 
   * 1. H1
   * 2. H2
   * 3. H3
   */
  size: HeadingSize;
}


/**
 * Gets the element used for the heading
 * @param size The heading size
 */
const getBaseElement = (size: HeadingSize) => {
  return size; // can just return the size as enum value is heading
}

export const Heading = (props: PropsWithChildren<HeadingProps>) => {
  return (
    <StyledHeading as={getBaseElement(props.size)} {...props}>
      { props.children }
    </StyledHeading>
  );
};

