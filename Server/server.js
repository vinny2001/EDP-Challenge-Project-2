import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
//Initialize Express server on Port 3000
const app = express();
const PORT = 3000;
app.use(express.json());

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const charactersCollection = process.env.CHARACTERS_COLLECTION;
const filmsCollection = process.env.FILMS_COLLECTION;
const planetsCollection = process.env.PLANETS_COLLECTION;
const filmsCharactersCollection = process.env.FILMS_CHARACTERS_COLLECTION;
const filmsPlanetsCollection = process.env.FILMS_PLANETS_COLLECTION;

app.get('/api/characters', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const characters_collection = db.collection(charactersCollection);
        const characters = await characters_collection.find({}).toArray();
        res.json(characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

app.get('/api/films', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const films_collection = db.collection(filmsCollection);
        const films = await films_collection.find({}).toArray();
        res.json(films);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

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

app.get('/api/characters/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const characters_collection = db.collection(charactersCollection);
        const character = await characters_collection.find({id: parseInt(id)}).toArray();
        res.json(character);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

app.get('/api/films/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const films_collection = db.collection(filmsCollection);
        const film = await films_collection.find({id: parseInt(id)}).toArray();
        res.json(film);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

app.get('/api/planets/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const planets_collection = db.collection(planetsCollection);
        const planet = await planets_collection.find({id: parseInt(id)}).toArray();
        res.json(planet);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});

app.get('/api/films/:id/characters', async (req, res) => {
    try {
        const {id} = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const films_chars_collection = db.collection(filmsCharactersCollection);
        const films_characters = await films_chars_collection.find({film_id: parseInt(id)}).toArray();
        res.json(films_characters);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute order 66 ☹");
    }
});
 

app.get('/api/films/:id/planets', async (req, res) => {
    try {
        const {id} = req.params;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        const films_planets_collection = db.collection(filmsPlanetsCollection);
        const filmsPlanets = await films_planets_collection.find({film_id: parseInt(id)}).toArray();

        res.json(filmsPlanets);
        console.log(filmsPlanets);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Execute Order 66 ☹");
    }
});

// BOTTOM OF FILE --- Server is started
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});