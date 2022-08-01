# React Typescript webpack setup with tailwindcss

## Prerequisite

- VS Code's extensions:

  - EditorConfig
  - TODO Highlight
  - ESLint
  - Prettier
  - Code Spell Checker

- Yarn: <https://yarnpkg.com/>

## Note

- Use yarn instead of npm.
- Don't forget to commit yarn.lock when you are adding new packages.

## How to Start

- Create .env.development with your own modifications:

sh
git config core.autocrlf false

- Install app dependencies:

sh
yarn install

- Start the development server:

sh
yarn start:dev

## Other commands

- You must fix all warning eslint typescript before commit to git and build project

- yarn build: build project
- yarn lint: Report linting issues for all files.
- yarn start:prod: start in production server
- yarn format: format all project with prettier

## USE SVG component

- Download file svg and remove properties (width, height) and replace all fill property by fill='current'

- Example:

  - import Logo from '@assets/svgs/logo.svg'

  - in jsx : <Logo width={10} height={10} fill='red' />

## Add config vscode to use eslint and prettier

"editor.codeActionsOnSave": {
"source.fixAll": true,
"source.fixAll.eslint": true
},
