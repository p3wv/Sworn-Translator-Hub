
# Sworn Translator Hub

![CI](https://github.com/thekicia3/sworn-translator-hub/actions/workflows/ci.yml/badge.svg)
![Coverage](https://gist.githubusercontent.com/thekicia3/5de95f073a61f690df407234e6d1265e/raw/coverage-badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Sworn Translator Hub is a modern monorepo for a certified translation service, featuring a React/Tailwind frontend, Express backend, and a modular TypeScript codebase.

## Monorepo Structure

```
artifacts/
  sworn-translator/    # Main frontend (React, Vite, Tailwind)
  api-server/          # Backend API (Express, Nodemailer, Multer)
  mockup-sandbox/      # UI mockups and experiments
lib/
  api-client-react/    # React API client
  api-spec/            # OpenAPI spec and codegen
  api-zod/             # Zod-based API types
  db/                  # Drizzle ORM schema and migrations
scripts/               # Utility scripts
```

## Getting Started

1. **Install dependencies:**
	```sh
	pnpm install
	```
2. **Start the frontend:**
	```sh
	pnpm --filter @workspace/sworn-translator dev
	```
3. **Start the backend:**
	```sh
	pnpm --filter @workspace/api-server dev
	```

## Development

- Use Node.js 20+ and [pnpm](https://pnpm.io/)
- Type check all packages: `pnpm run typecheck`
- Build all packages: `pnpm run build`
- Lint and format with Prettier

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Community

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)

## License

MIT
