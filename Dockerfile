FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -g @nestjs/cli

RUN npm run build

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start", "prod"]
