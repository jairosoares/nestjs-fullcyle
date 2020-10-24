FROM node:12.19-alpine3.12

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.0.0

USER node

WORKDIR /home/node/app

