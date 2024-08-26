FROM node

WORKDIR /app

RUN npm install -g pnpm

COPY --link . ./

RUN pnpm install
RUN pnpm exec playwright install --with-deps
