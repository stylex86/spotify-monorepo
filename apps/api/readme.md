
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
- **Spotify API**

## Ejecutar localmente

Clona este repositorio en tu máquina local

```bash
  git clone https://github.com/stylex86/spotify-monorepo.git
```

Abrir proyecto

```bash
  cd spotify-monorepo
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

- `CLIENT_ID`: Esta variable se utiliza para enviar a la api spotify el id cliente.

- `CLIENT_SECRET`: Esta variable se utiliza para enviar la clave secreta junto con el id cliente.

## Docker

Para crear la imagen de Docker, sigue estos pasos:
```bash
docker build . -t node-fastify:latest
```

Una vez que hayas construido la imagen de Docker, puedes ejecutar el contenedor utilizando el siguiente comando:
```bash
docker run -p 3002:3000 --name spotify-api node-fastify:latest