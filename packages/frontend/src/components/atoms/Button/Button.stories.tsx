import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const basic = () => {
  const disabled = boolean('Disabled', false);
  const loading = boolean('Loading', false);
  const theme = select(
    'Theme',
    {
      Primary: ButtonTheme.PRIMARY,
      Delete: ButtonTheme.DELETE,
    },
    ButtonTheme.PRIMARY,
  );

  return (
    <Button
      theme={theme}
      disabled={disabled}
      loading={loading}
      onClick={action('clicked')}
    >
      Button
    </Button>
  );
}

export const colours = () => (
  <Fragment>
    <Button
      theme={ButtonTheme.PRIMARY}
    >
      primary
    </Button>
    <Button
      theme={ButtonTheme.DELETE}
    >
      delete
    </Button>
  </Fragment>
);