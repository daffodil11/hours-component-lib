import React from 'react';
import { storiesOf } from '@storybook/react';

import Landing from './Landing';
import GlobalStyle from '../../styles/GlobalStyle';

export const slides = [{
    id: 1,
    header: "Test",
    body: "This is a test slide!",
    image: "TBD"
},
{
    id: 2,
    header: "Second test",
    body: "This is another test slide!",
    image: "TBD"
}]

storiesOf('Content', module)
  .addDecorator(story => <div><GlobalStyle/>{story()}</div>)
  .add('default', () => <Landing slides={slides}/>)