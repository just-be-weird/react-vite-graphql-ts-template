# react vite graphql ts template

This starter Vite project includes a minimal setup, if you want to learn more on
tools check the links.

## Prerequisite

1. Version manager for the node - nvm and recommended version 🔗 [view instruction](https://github.com/nvm-sh/nvm)
2. Yarn, install by running `npm install --global yarn`
3. Clone the repo by running `git clone https://github.com/just-be-weird/react-vite-graphql-ts-template.git nivoda-int`
4. Checkout `git checkout sridhar`
5. Run the project by `yarn dev`

## Challenge

1. Use [Rick and morty API](https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home) to get a list of episodes with `name` and characters with `picture, name`.
2. Provide a dropdown on the user interface for selecting the fetched episode from the list.
3. For a chosen episode, create a 3 X 3 grid with three random characters and Rick and Morty from the character list.
4. Three characters will be placed in pairs as follows

```js
const threePairedChars = 3 * 2; // 6 characters
const rickAndMortyPair = 1 + 1; // 1 rick + 1 morty => 2 characters
const oneRandomChar = 1;

// 3*3 grid using chars => 6 + 2 + 1 (any random char from 8) ==> 9
const threeByThreeGrid = threePairedChars + rickAndMortyPair + oneRandomChar;
```

1. You can click on any of these individual cards.
2. If a card has previously been clicked, and they match then keep them visible.
3. Hide them after one second if they don't match.
4. If all the pairs are matched, or you found Rick and Morty then show a dialog "You won!"

**Bonus**: Use TS to type e.g. function arg, return type, data, local vars and the response.

## Features

This template comes with the following features:

### Core UI

- [Mantine UI — Docs](https://mantine.dev/core/app-shell/)
- [Graphql — Docs](https://graphql.org/learn/)
- [React — Docs](https://react.dev/reference/react/)
- [Tabler icons — Docs](https://tabler-icons.io/)

### GraphQL API

- [Rick and Morty - API](https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home)
- [Star wars - swAPI](https://studio.apollographql.com/public/star-wars-swapi/variant/current/home)

### Networking

- [Apollo client — Docs](https://www.apollographql.com/docs/react/)
- [Graphql — Docs](https://graphql.org/learn/)
- [Axios — Docs](https://axios-http.com/docs/intro/)

### Utils

- [Lodash — Docs](https://lodash.com/docs/4.17.15/)

### Tooling

- [Vite — Docs](https://vitejs.dev/guide/)
- [Typescript — Docs](https://www.typescriptlang.org/docs/)
- [Prettier — Docs](https://prettier.io/docs/en/install/)
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## NPM scripts and how to run the project locally

1. Select correct version of node by running `nvm use`
2. Install dependencies by `yarn`
3. Run the project by `yarn dev`

### Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
