import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'glamor';


css.global('html', {
  fontSize: '62.5%',
});


addDecorator(withInfo);

// addDecorator(storyFn => <div {...rules}>{storyFn()}</div>);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
