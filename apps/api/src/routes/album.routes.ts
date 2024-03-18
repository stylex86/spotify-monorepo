import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { tokenMiddleware } from '../middleware/token.middleware';
import { getAlbum } from '../controllers/album.controller'

interface QueryParameters {
    query: string;
    type: string;
    offset: string;
    limit: string;
}
 

export default async function albumRoutes(fastify: FastifyInstance) {
    // metodos GET, POST, DELETE
    fastify.get<{ Querystring: QueryParameters }>('/albumes', { preHandler: tokenMiddleware }, getAlbum);
}