import app from '../src/app';
import { instance } from '../src/utils/instances';
import Album from '../src/models/album.models';

describe('funcionalidad álbumes /api/v1/albumes-favorites', () => {
    test('debe devolver álbumes favoritos con un código de estado 200', async () => {
    // Crea un objeto álbum para emular la ejecución
    const albumData = { title: 'Mi álbum favorito', favorite: true };
    const album = new Album(albumData);
    await album.save();

    // Se simula el metodo GET
    const response = await instance.inject({
        method: 'GET',
        url: '/api/v1/albumes-favorites'
    });

    // Verificación estado 200
    expect(response.statusCode).toBe(200);

    // Verificación de respuesta con el mensaje correcto y un listado de álbumes
    expect(response.json().message).toBe('Datos obtenidos exitosamente.');
    expect(response.json().data.length).toBeGreaterThan(0);

    // Se limpia el álbum
    await Album.deleteMany({ favorite: true });
    });

    test('debe responder con un código 200 y un mensaje de que no hay álbumes favoritos', async () => {
    // Simula un metodo GET
    const response = await instance.inject({
        method: 'GET',
        url: '/api/v1/albumes-favorites'
    });

    // Verificación estado 200
    expect(response.statusCode).toBe(200);

    // Verificación que la respuesta sea la que debe mostrar
    expect(response.json().message).toBe('No se encontraron datos favoritos.');
    });
});

describe('funcionalidad para la busqueda de álbumes /api/v1/albumes', () => {
    test('cuando se envía el campo query debe responder con código 200', async () => {
        // Simulación de una busqueda 
        const response = await instance.inject({
            method: 'GET',
            url: `/api/v1/albumes`,
            query: {
                query: 'The Doors'
            }
        });

        expect(response.statusCode).toBe(201);
    });

    test('cuando no se envía el campo query debe responder con código 500', async () => {
        const response = await instance.inject({
            method: 'GET',
            url: `/api/v1/albumes`
        });

        expect(response.statusCode).toBe(500);

        // Verificación que la respuesta sea la que debe mostrar
        expect(response.json().message).toBe('no existe el campo query.');
    });

    test('cuando el campo query está vacío debe responder con código 500', async () => {
        const response = await instance.inject({
            method: 'GET',
            url: `/api/v1/albumes`,
            query: {
                query: ''
            }
        });

        expect(response.statusCode).toBe(500);

        // Verificación que la respuesta sea la que debe mostrar
        expect(response.json().message).toBe('no se puede consultar álbumes sin palabras para realizar la busqueda.');
    });
});