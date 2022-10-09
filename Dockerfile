FROM node:18 AS builder

ARG NEXT_PUBLIC_URL

ENV NEXT_PUBLIC_URL=${NEXT_PUBLIC_URL}

WORKDIR /app

ADD package-lock.json package.json ./
RUN npm install

ADD . .

RUN npm build

FROM node:18-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

ADD package-lock.json package.json ./
RUN npm install

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

CMD ["npm", "start"]
