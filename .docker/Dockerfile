FROM node:16.13.2

USER node

###########################
# Var
###########################

ARG BASE_API_URL=""

ENV BASE_API_URL=${BASE_API_URL}

##########################
# END
##########################

RUN mkdir -p '/home/node/app'

WORKDIR '/home/node/app'

COPY --chown=node:node package*.json ./

COPY --chown=node:node . .

RUN npx browserslist@latest --update-db && yarn install

RUN yarn build

CMD yarn start
