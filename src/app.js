// src/app.js
import express from 'express';
import router from './routes/userroutes.js';

const app = express();

app.use(express.json());

// Use the router for user routes
app.use('/tasks', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
