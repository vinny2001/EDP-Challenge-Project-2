import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
//Initialize Express server on Port 3000
const app = express();
const PORT = 3000;

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const planetsCollection = process.env.PLANETS_COLLECTION;

app.get('/api/planets', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const planets_collection = db.collection(planetsCollection);
        const planets = await planets_collection.find({}).toArray();
        res.json(planets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

// BOTTOM OF FILE --- Server is started
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});