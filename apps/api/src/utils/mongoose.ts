import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27018/spotifydb')
  .then(() => console.log('Mongodb connected'))
  .catch((err: any) => console.log(err));
