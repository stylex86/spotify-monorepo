# aplicación Node
FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

# iniciar la aplicación Node
CMD ["npm", "start"]

# Parte para la configuración de MongoDB
FROM mongo:latest

# Copiar archivos de configuración de MongoDB si es necesario
# COPY mongo-config /etc/mongo

# Puerto de exposición de MongoDB
EXPOSE 27017

# Comando para iniciar MongoDB
CMD ["mongod", "--bind_ip_all"]
