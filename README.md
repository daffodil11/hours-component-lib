# Hours Component Library

This is a library of React components for use in the Hours project, which is a time-based currency platform that aims to give tangible value to community activity. It is open-source and can be found [here](https://github.com/PARC6502/hours-frontend). However, all components in this library are freely available to all who wish to use them.

The styling in this project utilises styled-components, component development utilises Storybook, and the Jest tests utilise Storybook snapshots (storyshots). To set up a development environment for this project, clone the repository, cd into the top level folder and run `yarn`. To run the component stories, run `yarn storybook`.

Te rest of this document is a brief guide to the components in this library. Like the directory structure of the project, this guide divides the components by their primary purpose in the web app.

## Components

### Common

No components yet.

### Landing

**Slider:** A slideshow component, which takes an array of slide objects and is controlled by left and right arrow buttons. A slide object must have a heading, and optionally can include an array of strings to constitute the body and an image for the background.

**Content:** A stateless component that displays the text for a slide in the Slider component.
