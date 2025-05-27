import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import personRoutes from './routes/personRoutes.js';
// import logger from './middlewares/logger.js';

dotenv.config({
    path:'./.env'
});

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/person', personRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
