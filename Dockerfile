FROM node:22-alpine

# Active pnpm via corepack (version pinned depuis package.json)
RUN corepack enable

WORKDIR /app

# Installe les deps en premier pour profiter du cache Docker
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Puis copie le reste du code
COPY . .

# Lance le bot
CMD ["node", "index.js"]
