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

1. Use the [Rick and morty API](https://studio.apollographql.com/public/rick-and-morty-a3b90u/variant/current/home)
 to fetch the list of episode with characters having `image, name, species, status`.
2. Provide a dropdown on UI to select the fetched episode from the list.
3. For a selected episode draw a grid of 3 X 3 using its characters.
4. You need to select a random character along with rick and morty.
5. All these individual cards can be clicked.
6. If once card has already been clicked prior, and they match then mark them as ANSWERED. 
7. If they don't match hide them after one second.
8. If all the cards are matched show a dialog "You won!"

**Bonus**: Use TS to type the data and response.

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
