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



export const text = () => (
  <div { ...rules } >
    <Button onClick={action('clicked')}>Primary</Button>
    <Button
      theme="delete"
      onClick={action('clicked')}
    >
      Delete
    </Button>
  </div>
)