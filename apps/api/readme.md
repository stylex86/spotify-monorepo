
# API V1.0 - SPOTIFY

### Introducción
Esta es una aplicación desarrollada con Node.js y el framework Fastify, diseñada para obtener un token de acceso y realizar operaciones relacionadas con los álbumes de Spotify.

### Funcionalidades
- **Obtención de Token de Acceso:** La aplicación utiliza las credenciales para obtener un token de acceso que permite la interacción con la API de Spotify.

- **Endpoints Personalizados:** Se han creado endpoints personalizados para llevar a cabo diferentes acciones relacionadas con los álbumes, como mostrar información, guardar álbumes favoritos y eliminar álbumes guardados.

### Tecnologías Utilizadas
- **TypeScript**
- **Node.js**
- **Fastify**
- **Mongo DB**
- **Spotify API**

Abrir proyecto

```bash
  cd spotify-monorepo/apps/api
```

Instala las dependencias del proyecto

```bash
  npm install
```

Inicia el servidor

```bash
  npm run dev
```

## Variables de Entorno

Para ejecutar este proyecto es importante mantener el archivo `.env` con las variables de entorno necesarias:

- `CLIENT_ID`
- `CLIENT_SECRET`
- `URL_SPOTIFY_TOKEN`
- `URL_SPOTIFY`
- `DB_CONNECT`

## Docker Images
Para crear la imagen de Docker, sigue estos pasos en la ruta `./apps/api`:

#### Paso 1 - Creación de imagenes
API NodeJS
```bash
docker build . -t spotify-monorepo-api:latest --target node-app
```
Mongo DB
```bash
docker build . -t spotify-monorepo-mongo:latest --target mongo-db     
```
#### Paso 2 - Creación de red network
Una vez que hayas construido las imagenes de Docker, puedes crear el network para ser usado por todos los contenedores con el siguiente comando:
```bash
docker network create spotify_network  
```

## Docker Contenedores
Después de crear las imágenes debes crear los contenedores:
```bash
docker run --name spotify-db --network spotify_network -p 27018:27017 -d spotify-monorepo-mongo:latest    
```

```bash
docker run --name spotify-api --network spotify_network -p 3002:3000 -d spotify-monorepo-client:latest
```