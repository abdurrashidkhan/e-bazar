import mongoose from 'mongoose';

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Mongodb Database connected');
  } catch (error) {
    console.log(error, 'Database connected fail');
  }
};
export default connectMongodb;
