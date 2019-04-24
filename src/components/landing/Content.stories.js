import React from 'react';
import { storiesOf } from '@storybook/react';

import Content from './Content';
import GlobalStyle from '../../styles/GlobalStyle';

export const content = {
    id: 1,
    header: "About us",
    body: ["Hours is a new time based currency platform."]
}

export const contentWithSections = {
    id: 1,
    header: "About us",
    body: ["Hours is a new time based currency platform.",
          "It gives tangible value to community activity",
          "Patrons, businesses and communities can support the hard-working people in nonprofits and in the local area to champion their work."]
}

export const contentWithMixedSections = {
    id : 2,
    header: "How it works",
    body: ["*Work hours*",
          "Volunteer hours of your time at a non-profit or within the local community",
          "*Log Hours*",
          "Record the hours you have worked and what you have done",
          "*Spend Hours*",
          "Redeem your hours within the network"],
}


storiesOf('Content', module)
  .addDecorator(story => <div><GlobalStyle/>{story()}</div>)
  .add('default', () => <Content content={content} />)
  .add('contentWithBodySections', () => <Content content={contentWithSections} />)