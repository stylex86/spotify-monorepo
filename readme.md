# Proyecto Spotify

Este proyecto se divide en dos partes principales: la API y el cliente. La API se encarga de interactuar con la API de Spotify para realizar diversas operaciones relacionadas con los álbumes, mientras que el cliente es una aplicación frontend desarrollada en React que consume la API y permite a los usuarios interactuar con la plataforma de Spotify.

## Características

- API Node JS - Fastify
- Mongo DB 
- Vite - React
- Docker

# Dockerización de la Aplicación

Para dockerizar esta aplicación, puedes utilizar dos métodos:

-  **Docker Compose**: Utiliza el archivo `docker-compose.yml`  que se enuentra en la raiz del proyecto y ejecuta las siguientes instrucciones. 

```bash
  docker-compose build
```
```bash
  docker-compose up
```

-  **Dockerización Manual**: Si prefieres mayor control o necesitas personalización, puedes seguir las instrucciones en los README de las carpetas `apps/api` y `apps/client` para dockerizar la API y el cliente respectivamente.



## Obtención del Código Fuente

Clona este repositorio en tu máquina local

```bash
  git clone https://github.com/stylex86/spotify-monorepo.git
```

## Descarga las imágenes de `Docker HUB`

