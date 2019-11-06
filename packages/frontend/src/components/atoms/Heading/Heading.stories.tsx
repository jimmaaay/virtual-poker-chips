import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Heading, HeadingSize } from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const basic = () => {
  const size = select(
    'Heading Size',
    {
      H1: HeadingSize.H1,
      H2: HeadingSize.H2,
      H3: HeadingSize.H3,
    },
    HeadingSize.H1,
  );

  return (
    <Heading size={size}>Heading</Heading>
  );
}
