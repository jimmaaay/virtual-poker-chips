import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`

const OuterDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > * > * {
    margin: 0 1rem;
  }
`;


const StylesDecorator = storyFn => (
  <Fragment>
    <GlobalStyles />
    <OuterDiv>
      { storyFn() }
    </OuterDiv>
  </Fragment>
);


addDecorator(withInfo);
addDecorator(StylesDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
