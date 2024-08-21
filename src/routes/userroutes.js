// src/routes/userroutes.js
import express from 'express';
import { readTasks, createTask, updateTasks, patchTasks, deleteTasks } from '../controller/taskcontroller.js';

const router = express.Router();

router.get('/', readTasks);
router.post('/', createTask);
router.put('/tasks/:id', updateTasks);
router.patch('/tasks/:id', patchTasks);
router.delete('/tasks/:id', deleteTasks);

export default router;
