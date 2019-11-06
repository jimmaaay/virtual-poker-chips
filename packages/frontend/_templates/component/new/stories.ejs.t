---
to: src/components/<%= h.getComponentDirectory(type) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---

import React from 'react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

export default {
  title: '<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
};

export const basic = () => {
  return (
    <<%= h.changeCase.pascal(name) %>>
      Hello World
    </<%= h.changeCase.pascal(name) %>>
  );
}