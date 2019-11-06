
import React from 'react';
import { TableView } from './TableView';
import { LayoutDecorator } from '@texas/helpers/storybook';
import { Layout } from '@texas/components/organisms/Layout/Layout';


export default {
  title: 'TableView',
  component: TableView,
  decorators: [LayoutDecorator]
};

export const basic = () => {
  return (
    <Layout>
      <TableView>
        Hello World
      </TableView>
    </Layout>
  );
}