import fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import axios, { AxiosResponse } from 'axios';

import dotenv from 'dotenv';
dotenv.config();

const app: FastifyInstance = fastify({ logger: true });

// Declara una ruta
app.get('/', function (request, reply) {
	return process.env.CLIENT_ID;
});

// Ejecuta el servidor
app.listen({ host: '0.0.0.0', port: 3000 }, function (err, address) {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	
	console.log(`Servidor ejecutandose en ${address}`);
});
