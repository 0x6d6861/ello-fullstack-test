FROM node:20-alpine as builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

COPY . ./

RUN rm ./.env.production
RUN mv ./.env ./.env.production

RUN yarn install

RUN yarn run build

FROM nginx:alpine

WORKDIR /etc/nginx/html/

RUN rm -rf *

COPY --from=builder /app/dist/ ./

RUN rm /etc/nginx/conf.d/default.conf
COPY _nginx/frontend.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]