import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import GlobalStyles from '../src/GlobalStyles';

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
