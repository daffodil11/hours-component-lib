# Hours Component Library

This is a library of React components for use in the Hours project, which is a time-based currency platform that aims to give tangible value to community activity. It is open-source and can be found [here](https://github.com/PARC6502/hours-frontend). However, all components in this library are freely available to all who wish to use them.

This document is a brief guide to the components in this library. Its structure is based on the directory structure of the project.

All styling relies upon styled-components. Component development utilises Storybook. Tests are Storybook snapshots (storyshots) and are powered by Jest.

##Components

###Common

###Landing
**Slider:** A slideshow component, which takes an array of slide objects and is controlled by left and right arrow buttons. A slide object must have a heading, and optionally can include an array of strings to constitute the body and an image for the background.
**Content:** A stateless component that displays the text for a slide in the Slider component.