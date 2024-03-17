import { FastifyRequest, FastifyReply } from 'fastify';

export interface Route {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    handler: (request: FastifyRequest, reply: FastifyReply) => void;
}
