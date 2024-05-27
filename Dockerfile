FROM node:18-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 2000
CMD ["npm", "start"]
