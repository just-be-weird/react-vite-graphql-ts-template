# react vite graphql ts template

Problem: https://docs.google.com/document/d/18XPdULwamW-A3DdZqAkWrW9eNadXj9yCIZPsTeD-EWw/edit
Codeshare https://codeshare.io/1V0Wvq

## Prerequisite
1. Requires node version v20.7.0 or any v18+
2. Version manager for the node - nvm and recommended version 🔗 [view instruction](https://github.com/nvm-sh/nvm)
3. Switch to correct node version by running `nvm use`
4. Run `npm i` to install packages
5. Switch to correct branch and then run the project by `npm run dev`

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
