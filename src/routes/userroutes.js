// src/routes/userroutes.js
import express from 'express';
import { readTasks, createTasks, updateTasks, patchTasks, deleteTasks } from '../controller/taskcontroller.js';

const router = express.Router();

// Define the route to read tasks
router.get('/', readTasks);
router.post('/', createTasks);
router.put('/tasks/:id', updateTasks);
router.patch('/tasks/:id', patchTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;
