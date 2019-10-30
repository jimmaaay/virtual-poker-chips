
import React from 'react';
import styled from 'styled-components';
import { Layout } from './Layout';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
`;

export default {
  title: 'Layout',
  component: Layout,
  decorators: [(storyFn:any) => <Container>{storyFn()}</Container>]
};

export const basic = () => {
  return (
    <Layout>
      Hello World
    </Layout>
  );
}