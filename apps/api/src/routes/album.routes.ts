import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { tokenMiddleware } from '../middleware/token.middleware';
import { getAlbum } from '../controllers/album.controller'


export default async function albumRoutes(fastify: FastifyInstance) {
    // metodos GET, POST, DELETE
    fastify.get('/albumes', { preHandler: tokenMiddleware }, getAlbum);
}