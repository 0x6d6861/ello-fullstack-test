FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 4000

CMD ["npm", "start:dist"]