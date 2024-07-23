import express from 'express';
import connectDB from './Database/config.js';
import mentorRoute from './Routers/mentRoute.js';
import studentRoute from './Routers/studRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api/mentors', mentorRoute);
app.use('/api/students', studentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





