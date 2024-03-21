import app from '../src/app';
import { instance } from '../src/utils/instances';

describe('Pruebas ruta inicial', () => {
  test('debería responder con un código 200 y un mensaje "OK" en la ruta "/"', async () => {
    const response = await instance.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'OK' });
  });

});
