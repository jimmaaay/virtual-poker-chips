import React, { Fragment } from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';
import GlobalStyles from '../src/GlobalStyles';

const OuterDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  > div > * {
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
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
