import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';
import GlobalStyle from '../../styles/GlobalStyle';
import AboutUs from '../../assets/jumpyHours.png';
import LogHours from '../../assets/logHours.png';
import HowItWorks from '../../assets/helping.png';
import SpendHours from '../../assets/shopSupport.png';
import ExchangeHours from '../../assets/greatTime.png';
import KeepTrack from '../../assets/toolExchange.png';
import Supporters from '../../assets/supporters.png';

export const slides = [
    {
        id : 1,
        header: "About Us",
        body: "Hours is a new time based cryptocurrency platform that gives a tangible value to voluntary sector and community activity, so that patrons, businesses and communities can support the hard-working people in nonprofits and in the local area to champion their work. Hours also unlocks innovative mutual aid and trust pathways between, otherwise unconnected, organisations and activities.",
        image: AboutUs
    },
    {
        id : 2,
        header: "How it works",
        body: "[Work hours] Volunteer hours of your time at a non-profit or within the local community [Log Hours] Record the hours you have worked and what you have done [Spend Hours] Redeem your hours within the network",
        image: HowItWorks
    },
    {
        id : 3,
        header: "Log",
        body: "You can log the hours you have worked by clicking on the log hours button and picking the organisation from the drop down menu. A moderator from your organisation will need to approve your hours for you to receive them.",
        image: LogHours
    },
    {
        id : 4,
        header: "Spend",
        body: "Once you receive hours you will be able to spend these with our growing network of supporters who accept them. From cinema tickets to travel subsidiaries. This is a community currency, provided and spend in the community. Become a vendor or patron to help grow the network.",
        image: SpendHours
    },
    {
        id : 5,
        header: "Exchange",
        body: "You can also exchange hours by sending them directly to an individual as a tip, a token of gratitude or as a payment for some help they have provided. These personal transactions generate a digital receipt that keeps track of actions and exchanges. ",
        image: ExchangeHours
    },
    {
        id : 6,
        header: "Keep track of things",
        body: "Everytime you borrow something, for example a hammer from the toolbox. Record the exchange with a token amount of hours, so users can track down borrowed items easily.",
        image: KeepTrack
    },
    {
        id : 7,
        header: "Our supporters and partners",
        body: "We would like to thank our partners in helping us develop the project.\n\nEasa Croatia.\nRijeka 2020.\nParty for the people.",
        image: Supporters
    }
];

storiesOf('Slider', module)
  .addDecorator(story => <div><GlobalStyle/>{story()}</div>)
  .add('default', () => <Slider slides={slides}/>)