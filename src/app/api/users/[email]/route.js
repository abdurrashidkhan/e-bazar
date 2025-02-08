// pages/api/user/[email].js
import connectMongodb from '@/lib/mongodb';
import jwt from 'jsonwebtoken';
// Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { email } = req.query;
    const user = req.body;

    try {
      const { db } = await connectMongodb();
      const userCollection = db.collection('users'); // Replace 'users' with your collection name

      const filter = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: user,
      };

      const result = await userCollection.updateOne(filter, updateDoc, options);

      const token = jwt.sign(
        { email: email },
        process.env.ACCESS_TOKEN,
        {
          expiresIn: "40d",
        }
      );

      res.status(200).json({ result, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}