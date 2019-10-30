import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
`;

export const LayoutDecorator = (storyFn:any) => <Container>{storyFn()}</Container>;