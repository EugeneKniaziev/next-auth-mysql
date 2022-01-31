FROM node:16-alpine as builder
USER node

RUN mkdir -p '/home/node/app'
WORKDIR '/home/node/app'

COPY --chown=node:node package.json yarn.lock ./
COPY --chown=node:node . .
COPY --chown=node:node ./prisma ./prisma

RUN yarn install
RUN yarn prisma generate
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
