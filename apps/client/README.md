
# CLIENT V1.0 - SPOTIFY

### Introducción
Esta es una aplicación front-end desarrollada con react y typescript para mostrar los álbumes de artistas según la busqueda.

### Funcionalidades
- **Mostrar Favoritos:** muestra los álbumes que se agregaron al recargar la pagina.

- **Busqueda:** Posibilidad para buscar palabras por artista o álbumes

- **Agregar Favoritos:** Funcion para agregar y/p quitar los álbumes favoritos.

### Tecnologías Utilizadas
- **Vite**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **HeroIcons**

## Ejecutar localmente

Abrir proyecto

```bash
  cd spotify-monorepo/apps/client
```

Instala las dependencias del proyecto

```bash
  npm install
```

Inicia el servidor

```bash
  npm run dev
```

## Docker Images
Para crear la imagen de Docker, sigue estos pasos en la ruta `./apps/client`:

#### Paso 1 - Creación de imagenes
React Vite
```bash
docker build . -t spotify-monorepo-client:latest  
```

## Docker Contenedores
Después de crear la imagen debes crear los contenedores:
```bash
docker run --name spotify-client --network spotify_network -p 5174:5173 -d spotify-monorepo-client:latest     
```
