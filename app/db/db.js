import { MongoClient } from "mongodb";


const createMongoClient = async () => {
  const uri =
    "mongodb+srv://nimesh:5UtJ1qb93zf9iIMC@cluster0.01ne6v4.mongodb.net";
  const client = new MongoClient(uri);
  await client.connect();
  return client;
};

export default createMongoClient