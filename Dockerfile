# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# node_modules をインストール
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# アプリケーションをビルド
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn export

# Apache で配信
FROM httpd:2.4-alpine
COPY --from=builder /app/out /usr/local/apache2/htdocs