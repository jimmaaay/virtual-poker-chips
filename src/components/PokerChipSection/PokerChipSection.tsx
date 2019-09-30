import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const ChipSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  grid-gap: 2rem;
  margin: 0 0 2rem;
`;

const PokerChipSection = (props: PropsWithChildren<{}>) => (
  <ChipSection>
    {props.children}
  </ChipSection>
);

export default PokerChipSection;
