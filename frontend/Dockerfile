FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

RUN yarn add -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]