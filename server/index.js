import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js'
import Router from './routes/route.js';

const app  = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const PORT = 8000;
// const USERNAME = process.env.MONGO_DB_USER;
// const PASSWORD = process.env.MONGO_DB_PASSWORD;
// const DBNAME = process.env.MONGO_DB_DATABASE;

Connection();
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));
DefaultData();