import app from '../app';
import { FastifyInstance } from 'fastify';
import { connectMongoDB, disconnectMongoDB } from './mongoose';

// creamos la instancia donde pueda ser utilizado en todos los test
let instance: FastifyInstance;

beforeAll(async () => {
  await connectMongoDB();
  instance = app;
  await instance.ready();
});

afterAll(async () => {
  await disconnectMongoDB();
  await instance.close();
});

export { instance };
