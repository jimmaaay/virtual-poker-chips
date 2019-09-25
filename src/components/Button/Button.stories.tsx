import React from 'react';
import { action } from '@storybook/addon-actions';
import { css } from 'glamor';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const rules = css({
  '> * ': {
    margin: '0 1rem',
  }
});



export const colours = () => (
  <div { ...rules } >
    <Button onClick={action('clicked')}>primary</Button>
    <Button
      theme="delete"
      onClick={action('clicked')}
    >
      delete
    </Button>
  </div>
)