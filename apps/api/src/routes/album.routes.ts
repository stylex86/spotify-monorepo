import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {tokenMiddleware} from '../middleware/token.middleware'

export default async function albumRoutes(fastify: FastifyInstance) {
    // Definir la ruta para obtener todos los usuarios
    fastify.get('/albumes', { preHandler: tokenMiddleware }, async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            // despues del middleware siempre obtenemos el acceso del token válido
            const access_token = request.cookies['access_token'];

            return {
                access_token: access_token
            };
        } catch (error) {
            // Manejar cualquier error que ocurra
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}