import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};


export const colours = () => (
  <Fragment>
    <Button onClick={action('clicked')}>primary</Button>
    <Button
      theme="delete"
      onClick={action('clicked')}
    >
      delete
    </Button>
  </Fragment>
);

export const disabled = () => (
  <Fragment>
    <Button onClick={action('clicked')}>not disabled</Button>
    <Button onClick={action('clicked')} disabled>disabled</Button>
  </Fragment>
);