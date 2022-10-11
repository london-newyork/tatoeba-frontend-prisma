FROM nikolaik/python-nodejs:python3.7-nodejs18-slim AS builder

ARG NEXT_PUBLIC_BACKEND_URL

ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL}

WORKDIR /app

COPY package-lock.json package.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nikolaik/python-nodejs:python3.7-nodejs18-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY package-lock.json package.json ./
RUN npm install

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

CMD [ "npm", "run", "start"]
