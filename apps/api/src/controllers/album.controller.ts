
import { FastifyRequest, FastifyReply } from 'fastify';
import axios from 'axios';

export const getAlbum = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const access_token = request.cookies['access_token'];

        // const response = await axios.post(
        //     `${process.env.URL_SPOTIFY}`,
        //     new URLSearchParams({
        //         'grant_type': 'client_credentials',
        //     }),
        //     {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'Authorization': `Basic ${Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64')}`,
        //         },
        //     }
        // );
    
        return {
            access_token: access_token,
            testing: true
        };
    } catch (error) {
        reply.code(500).send({ error: 'Error al obtener o establecer el token' });
    }
};
