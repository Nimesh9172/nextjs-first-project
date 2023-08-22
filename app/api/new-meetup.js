import { MongoClient } from "mongodb"

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
// export async function handler(req,res){
//     if (req.method === 'POST'){
//         const data = req.body

//         console.log(data)

//         // const client = await MongoClient.connect('mongodb+srv://testonlinenike:G09M2sKAf5TBcGVS@cluster0.01ne6v4.mongodb.net/meetups?retryWrites=true&w=majority')
//         // const db = client.db()

//         // const meetupsCollection = db.collection('meetups');

//         // const result = await meetupsCollection.insertOne(data)

//         // console.log(result)

//         // client.close()

//         res.status(201).json({message:"Data Inserted"})
//     }
// }
