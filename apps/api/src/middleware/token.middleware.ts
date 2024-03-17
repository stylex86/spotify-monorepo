import { FastifyRequest, FastifyReply } from 'fastify';
import { getToken } from '../controllers/token.controller';

export const tokenMiddleware = async (request: FastifyRequest, reply: FastifyReply, done: Function) => {
    try {
        // Obtenemos el access_token para verificar si existe
        const access_token = request.cookies['access_token']; 
        
        if (!access_token) {
            // obtenemos un nuevo token desde spotify
            const tokenResponse = await getToken();

            // spotidy por defecto da 3600 segundos, en este caso lo debemos pasar a microsegundos para darles un tiempo de expiración
            const expires_in = new Date(Date.now() + (tokenResponse.expires_in * 1000));
            
            // seteamos las cookies y guardamos el access_token
            reply.setCookie('access_token', tokenResponse.access_token, {
                expires: expires_in,
            });

            // guardamos en el request el cookies para obtenerlo
            request.cookies['access_token'] = tokenResponse.access_token;
        }

        done(); // continuamos con la ejecución del código
    } catch (error) {
        reply.code(500).send({ error: 'Error al obtener o establecer el token' });
    }
};
