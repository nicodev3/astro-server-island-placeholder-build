# Repro: Astro build `Unterminated string` in `create-vite`

`astro build` fails on Astro 7.3.8 when a page imports a module that imports `astro/config` (here, a shared fonts module used by both `astro.config.mjs` and the page).

```
[PARSE_ERROR] Unterminated string
chunks/create-vite_….mjs
var serverIslandPlaceholderMap = "new Map([
```

```sh
npm install
npm run build
```
