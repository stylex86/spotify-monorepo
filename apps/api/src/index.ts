import fastify, { FastifyInstance} from 'fastify';
import fastifyCookie from '@fastify/cookie';
import albumRoute from './routes/album.routes';
import dotenv from 'dotenv';
const app: FastifyInstance = fastify({ logger: true });

import './utils/mongoose';
dotenv.config();


app.register(fastifyCookie);
app.register(albumRoute, { prefix: '/api/v1' });

// Declara una ruta
app.get('/', function (request, reply) {
  reply.clearCookie('access_token');
  return request.cookies;
});

// Ejecuta el servidor
app.listen({ host: '0.0.0.0', port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Servidor ejecutandose en ${address}`);
});
