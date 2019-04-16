import React from 'react';
import { storiesOf } from '@storybook/react';

import Content from './Content';

export const content = {
    id: 1,
    header: "About us",
    body: "Hours is a new time based currency platform.",
    image: "example"
}

storiesOf('Content', module)
  .add('default', () => <Content content={content} />)