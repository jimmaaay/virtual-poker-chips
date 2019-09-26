import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
`

const OuterDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerDiv = styled.div`
  > * > * {
    margin: 0 1rem;
  }
`;

const StylesDecorator = storyFn => (
  <Fragment>
    <GlobalStyles />
    <OuterDiv>
      <InnerDiv>
        { storyFn() }
      </InnerDiv>
    </OuterDiv>
  </Fragment>
);


addDecorator(withInfo);
addDecorator(StylesDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
