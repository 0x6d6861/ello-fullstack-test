FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --legacy-peer-deps

COPY . .

RUN yarn run build

RUN yarn global add serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-p", "3000"]