import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(`${process.env.DB_CONNECT}`)
  .then(() => console.log('Mongodb connected'))
  .catch((err: any) => console.log(err));
