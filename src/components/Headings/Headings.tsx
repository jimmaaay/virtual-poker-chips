import React from 'react';
import styled from 'styled-components';

/**
 * Heading font sizes were generated from https://type-scale.com using the Minor third option
 */

const sharedHeadingStyles = `
  line-height: 1.2;
  font-weight: 300;
`;

export const H1 = styled.h1`
  ${sharedHeadingStyles}
  font-size: 4rem;
`;

export const H2 = styled.h2`
  ${sharedHeadingStyles}
  font-size: 3.3rem;
`

export const h3 = styled.h3`
  ${sharedHeadingStyles}
  font-size: 2.8rem;
`;

