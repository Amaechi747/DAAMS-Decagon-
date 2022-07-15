FROM node:16.15.0

WORKDIR /node/app

COPY package*.json ./
COPY ./yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 5000

CMD ["yarn", "serve"]
