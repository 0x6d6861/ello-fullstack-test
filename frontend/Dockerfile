FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN ls -la

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]