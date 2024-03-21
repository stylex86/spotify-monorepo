import fastify, { FastifyInstance} from 'fastify';
import fastifyCookie from '@fastify/cookie';
import fastifyCors from '@fastify/cors';
import albumRoute from './routes/album.routes';
import dotenv from 'dotenv';
import { connectMongoDB } from './utils/mongoose';
connectMongoDB();

const app: FastifyInstance = fastify({
  logger: {
    level: "debug",
  },
});


dotenv.config();

app.register(fastifyCors);
app.register(fastifyCookie);
app.register(albumRoute, { prefix: '/api/v1' });

// Declara una ruta
app.get('/', function (request, reply) {
  // reply.clearCookie('access_token');
  // return request.cookies;
  return reply.code(200).send({
    message: 'OK'
  });
});

export default app;