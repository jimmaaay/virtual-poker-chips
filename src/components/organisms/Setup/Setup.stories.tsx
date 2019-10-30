import React from 'react';
import { Setup } from './Setup';
import { LayoutDecorator } from '@texas/helpers/storybook';
import { Layout } from '@texas/components/organisms/Layout/Layout';


export default {
  title: 'Setup',
  component: Setup,
  decorators: [LayoutDecorator]
};

export const basic = () => {
  return (
    <Layout>
      <Setup />
    </Layout>
  );
}