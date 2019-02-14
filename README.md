This is a web app for the list of songs and musics in database. This project was designed thoroughly to satisfy both future scalability and feature extensabilities.

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn install](#yarn-install)
  - [yarn start](#yarn-start)
  - [yarn run storybook](#yarn-run-storybook)
  - [yarn run cypress](#yarn-run-cypress)
- [Main libraries](#main-libraries)
- [Coding styles](#coding-styles)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    common/
        assets/
        components/
        styled_components/
        theme/
        type/
        utils/
    duck/
    message/
    service/
    sngListPage/
    App.js
    index.js
    store.js
  stories/
  cypress/
  api/
    __mock__/
```

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies before runing the project.

### `yarn start`

**Note: In order to run the porject, you need to rename the `.env.example` to `.env.local` or create your own local file first**

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run storybook`

Runs the storybook you can check exits components in different mode there.<br>
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

### `yarn run test-e2e`

Launches the test runner in the interactive watch mode.<br>
**Note: In order to run cypress, awaly keep the project runing on [http://localhost:3000](http://localhost:3000) first**

## Main libraries

- React: [A JavaScript library for building user interfaces](https://reactjs.org/)
- Redux: [Redux is a predictable state container for JavaScript apps](https://redux.js.org/)
- Redux-actions: [Flux Standard Action utilities for Redux](https://github.com/redux-utilities/redux-actions)
- Storybook: [Storybook is a development environment for UI components.](https://github.com/storybooks/storybook)
- Styled-components: [Use the best bits of ES6 and CSS to style your apps without stress](https://www.styled-components.com/)
- Cypress:[Fast, easy and reliable testing for anything that runs in a browser.](https://www.cypress.io/)
- Flow: [Flow is a static type checker for javascript](https://flow.org/en/)

## Coding styles

This project is following [Airbnb javascript style guid](https://github.com/airbnb/javascript) by [prettier](https://github.com/prettier/prettier) and [eslint](https://eslint.org/).

The redux is following the [duck](https://github.com/erikras/ducks-modular-redux) proposal

### `Tips`

- Searching keyword `// override external library` may found all override styles
