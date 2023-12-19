# react vite graphql ts template

This starter Vite project includes a minimal setup, if you want to learn more on
tools check the links.

## Prerequisite

1. Make sure you've a node version equal to higher than v18. Install node via version manager for the node - nvm 🔗 [view instruction](https://github.com/nvm-sh/nvm)
2. Clone the repo by running `git clone https://github.com/just-be-weird/react-vite-graphql-ts-template.git nivoda-int`
3. Checkout `git checkout frontend/md/q/tree-fri`
4. Run `npm i`
5. Run the project by `npm run dev`

## Challenge

1. Fetch the data from given Graph/Rest endpoint point. This endpoints' response is a list of episodes, with each episode having name and episode number.
2. First task is for each episode assign a random rating between 0 and 5.
3. Using this data build a search by episode name filter box and filter by episode rating using rating filter where rating can be 1,2,3,4,5.

**Bonus**:

- Test when a directory is expanded shows correct content and hides it when clicked again.
- Use TS to type e.g. function arg, return type, data, local vars and the response.

## Features

This template comes with the following features:

### Core UI

- [Mantine UI — Docs](https://mantine.dev/core/app-shell/)
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
