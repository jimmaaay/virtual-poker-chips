
import React from 'react';
import { Home } from './Home';
import { LayoutDecorator } from '../../../helpers/storybook';
import { Layout } from '@texas/components/organisms/Layout/Layout';


export default {
  title: 'Home',
  component: Home,
  decorators: [LayoutDecorator]
};

export const basic = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}