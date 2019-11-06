---
to: src/components/<%= h.getComponentDirectory(type) %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.test.tsx
---

import React from 'react';
import { render } from '@testing-library/react';
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>';

describe('<%= h.changeCase.pascal(name) %> component', () => {

  test('should render the component', () => {
    const { container } = render(<<%= h.changeCase.pascal(name) %> />);
    expect(container.firstChild).toBeDefined();
  });

});