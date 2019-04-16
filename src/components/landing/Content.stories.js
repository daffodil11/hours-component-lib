import React from 'react';
import { storiesOf } from '@storybook/react';

import Content from './Content';
import GlobalStyle from '../../styles/GlobalStyle';

export const content = {
    id: 1,
    header: "About us",
    body: "Hours is a new time based currency platform."
}

storiesOf('Content', module)
  .addDecorator(story => <div><GlobalStyle/>{story()}</div>)
  .add('default', () => <Content content={content} />)