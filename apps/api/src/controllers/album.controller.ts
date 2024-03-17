
import { FastifyRequest, FastifyReply } from 'fastify';

export const getAlbum = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const access_token = request.cookies['access_token'];

        return {
            access_token: access_token,
            testing: true
        };
    } catch (error) {
        reply.code(500).send({ error: 'Error al obtener o establecer el token' });
    }
};
