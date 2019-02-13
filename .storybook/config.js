import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-styled-components';
import styled from 'styled-components';
import GlobalStyles from '../src/common/theme/GlobalStyles';
import main from '../src/common/theme/theme';

function loadStories() {
  addDecorator(stories => (
    <div>
      <GlobalStyles />
      {stories()}
    </div>
  ));
  addDecorator(withThemes({ main }));
  const req = require.context('../stories', true, /story\.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
