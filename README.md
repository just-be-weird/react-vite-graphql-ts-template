# react vite graphql ts template

This starter Vite project includes a minimal setup, if you want to learn more on
tools check the links.

## Prerequisite

### For locally cloned repo

1. Make sure you've a node version equal to higher than v18. Install node via version manager for the node - nvm 🔗 [view instruction](https://github.com/nvm-sh/nvm)
2. Clone the repo by running `git clone https://github.com/just-be-weird/react-vite-graphql-ts-template.git nivoda-int`
3. Checkout `git checkout frontend/md/q/tree-fri`
4. Run `npm i`
5. Run the project by `npm run dev`

### Using Codesandbox.io

1. Need to Sign in to [codesandbox](https://codesandbox.io/) using your github account

## Challenge

1. **Data Retrieval:** We'll begin by fetching data from the provided [Graph](https://rickandmortyapi.com/documentation/#graphql)/[REST](https://rickandmortyapi.com/api/episode) endpoint.
This endpoint should return a list of episodes, each list item containing information like name, episode number, and a section dedicated to displaying the first three characters' image previews along with a button to load more characters.

2. **Random Rating Assignment:** To add some engagement, we'll assign a random rating between 0 and 5 to each episode within the retrieved data.

3. **Interactive Filtering:** Leveraging the updated data, we'll build a user-friendly search experience. This will include two filtering functionalities:
   1. **Search by Episode Name:** Users can search for specific episodes by entering their names in a dedicated filter box.
   2. **Filter by Episode Rating:** Additionally, users can filter the displayed episodes based on their assigned ratings. The filter options will include individual buttons or sliders for ratings between 1 and 5.

## Features

This template comes with the following features:

### Core UI

- [Mantine UI Optional — Docs](https://mantine.dev/core/app-shell/)
- [Graphql — Docs](https://graphql.org/learn/)
- [React — Docs](https://react.dev/reference/react/)
- [Tabler icons — Docs](https://tabler-icons.io/)

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
