// mongoose.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export async function connectMongoDB() {
  try {
    let Connet: string = '';
    if (process.env.DB_STATUS === 'PROD') {
      Connet = process.env.DB_CONNECT_PRODUCCION || '';
    } else {
      Connet = process.env.DB_CONNECT_DEBUG || '';
    }
    console.log(Connet);
    await mongoose.connect(`${Connet}`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

export async function disconnectMongoDB() {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error('Error while disconnecting from MongoDB:', error);
  }
}


// import mongoose from 'mongoose';

// mongoose
//   .connect('mongodb://127.0.0.1:27018/spotifydb')
//   .then(() => console.log('Mongodb connected'))
//   .catch((err: any) => console.log(err));


// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();
// // `${process.env.DB_CONNECT}`
// mongoose
//   .connect(`mongodb://localhost/spotifydb`)
//   .then(() => console.log('Mongodb connected'))
//   .catch((err: any) => console.log(err));