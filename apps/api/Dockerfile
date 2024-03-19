# aplicación Node
FROM node:18-alpine as node-app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

# MongoDB
FROM mongo:latest as mongo-db

EXPOSE 27017

CMD ["mongod", "--bind_ip_all"]
