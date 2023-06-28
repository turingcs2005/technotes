import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import chalk from 'chalk';
// import dotenv from 'dotenv';
// dotenv.config();
import cors from 'cors';
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5001;

// 🥭 connect to MongoDB database
const MongoDB_Connection_String = "mongodb://localhost/techdoc";
async function connectToMongoDB(connectionString: string) {
    mongoose.connect(connectionString);
    console.log(chalk.bold.cyan('✌️ MongoDB database successfully connected!'));
}

try {
    await connectToMongoDB( MongoDB_Connection_String);
} catch(e) {
    console.log(chalk.bold.red(`💩 MongoDB connection failure!`, e)); 
}
// 🥭 -----------------------------

// 💻 configure server
const app = express();

// 🐫 import geo router and post router
import { router as geoValidators } from './routes/geo-validators.routes.mjs';
import { router as postRouter } from './routes/post.routes.mjs';

// 🖕 middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 🐫 use geo router and post router
app.use('/api/geo-validators', geoValidators);
app.use('/api', postRouter);

// 📐 serve angular app
app.use(express.static(path.join(__dirname, '..', 'angular')));
app.all('/*', (req, res, next) => {
    res.sendFile('index.html', {root: path.join(__dirname, '..', 'angular')});
});
// 💻 -----------------------------

app.listen(PORT, () => {
    console.log(chalk.bold.cyan(`✌️ Server is listening on port ${PORT}.`)); // 
});