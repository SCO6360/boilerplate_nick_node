# boilerplate_nick_node

A small Node.js starter template with no dependencies, plus a place to keep learning notes.

## Requirements

Node.js 20 or newer (`.nvmrc` pins 22; run `nvm use` if you use nvm).

## Getting started

```sh
npm start            # run src/index.js
npm run dev          # run and restart on file changes
npm test             # run tests in test/
npm run test:watch   # re-run tests on change
npm run note -- "title of what I learned"   # new note in notes/
```

Try it: `npm start -- Nick` prints `Hello, Nick!`.

## Layout

```
src/        application code (ES modules)
test/       tests (node:test)
scripts/    helper scripts
notes/      learning journal, see notes/README.md
.env.example  copy to .env for local settings
```

## Using this as a template

1. On GitHub, mark the repo as a template (Settings > "Template repository"), then use "Use this template" for new projects.
2. In the new project, change `name` and `description` in `package.json` and update this README.
3. Delete the example `greet` code and its test, and keep the structure.

## Adding things later

Add them only when you need them: a linter (ESLint), a formatter (Prettier), TypeScript, or a framework (Express, Fastify). Write a note when you do.
