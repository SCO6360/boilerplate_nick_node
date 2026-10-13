# Project setup: why each file exists

| File | Why it's here |
| --- | --- |
| `package.json` | Describes the project and holds the `npm run ...` scripts. |
| `"type": "module"` | Lets us use `import`/`export` instead of `require`. |
| `.nvmrc` | Pins the Node version. With nvm, run `nvm use`. |
| `engines` in `package.json` | Warns if someone uses a Node version that's too old. |
| `.gitignore` | Keeps `node_modules`, `.env`, logs, etc. out of git. |
| `.env.example` | Documents env vars. Copy to `.env` (which is ignored) for real values. |
| `.editorconfig` | Makes editors agree on indentation and line endings. |
| `src/` | The application code. |
| `test/` | Tests, run by Node's built-in runner (`node --test`). |
| `scripts/` | Small helper scripts (e.g. the note generator). |
| `notes/` | My learning journal. |

## Things to look up next

- [ ] What does `node --watch` actually do?
- [ ] When do I need a dependency vs. a built-in?
- [ ] How do `dependencies` and `devDependencies` differ?
