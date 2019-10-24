
import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { Input } from './Input';

const store = new Store({
  value: '',
});

export default {
  title: 'Input',
  component: Input,
};

export const basic = () => {
  return (
    <State store={store}>
      <Input
        label="Example"
        type="text"
        id="example"
        value={store.get('value')}
        onChange={(e) => store.set({ value: e.target.value })}
      />
    </State>
  );
}