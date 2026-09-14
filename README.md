# Nuxt Content Starter

Look at the [Nuxt Content documentation](https://content.nuxt.com) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy to Cloudflare Workers

This project is configured for [Cloudflare Workers](https://workers.cloudflare.com/) via the `cloudflare-module` Nitro preset.

### 1. Install Wrangler (if not already installed)

```bash
npm install
```

`wrangler` is listed as a dev dependency.

### 2. Authenticate with Cloudflare

```bash
npx wrangler login
```

### 3. Configure `wrangler.toml`

Edit `wrangler.toml` and set:

- `name` — your Workers project name (default: `base-studio`).
- `compatibility_date` — keep it recent or bump to today.
- Optional bindings: KV, D1, R2, secrets, etc.

If you use a custom domain, configure routes in the Cloudflare dashboard after the first deploy.

### 4. Build and deploy

```bash
npm run deploy
```

This runs `nuxt build` then `wrangler deploy`.

### Useful commands

| Command | Description |
| --- | --- |
| `npm run build:cf` | Build explicitly with the Cloudflare preset |
| `npm run deploy` | Build and deploy to Workers |
| `npm run deploy:direct` | Deploy the existing `.output/server/index.mjs` without rebuilding |
| `npm run cf:preview` | Preview the Worker locally with Wrangler |
| `npm run cf:tail` | Stream live logs from the deployed Worker |

### Notes and caveats

- The project uses `compatibility_flags = ["nodejs_compat_v2"]` so Node.js built-ins (e.g. `crypto`, `path`) work on Workers.
- `@nuxt/content` with server-side SQLite via `better-sqlite3` does not run on Cloudflare Workers because native Node.js modules are not supported in the Workers runtime. If you need editable/server content on the edge, switch `@nuxt/content` to use D1 or prerender content with `nuxt generate`. For static content, `nuxt generate` + Cloudflare Pages may be simpler.
- Keep secrets (API keys, tokens) out of `wrangler.toml`. Use `npx wrangler secret put <NAME>` instead.
