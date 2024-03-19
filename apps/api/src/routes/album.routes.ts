import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { tokenMiddleware } from '../middleware/token.middleware';
import { getAlbumesBusqueda, getAlbumesFavorites, updateAlbumFavorite } from '../controllers/album.controller'

interface QueryParameters {
    query: string;
    type: string;
    offset: string;
    limit: string;
}
 

export default async function albumRoutes(fastify: FastifyInstance) {
    // metodos GET, POST, DELETE
    fastify.get<{ Querystring: QueryParameters }>('/albumes', { preHandler: tokenMiddleware }, getAlbumesBusqueda);
    
    // Obtener Favoritos
    fastify.get('/albumes-favorites', getAlbumesFavorites);

    // Actualización Favoritos
    fastify.put<{ Params: { id: string } }>('/albumes/:id', updateAlbumFavorite);
}

