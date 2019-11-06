
import React from 'react';
import { Layout } from './Layout';
import { LayoutDecorator } from '../../../helpers/storybook';

export default {
  title: 'Layout',
  component: Layout,
  decorators: [LayoutDecorator]
};

export const basic = () => {
  return (
    <Layout>
      Hello World
    </Layout>
  );
}