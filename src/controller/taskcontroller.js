// src/controller/taskcontroller.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the JSON file
const tasksFilePath = path.join(__dirname, '../datastore/taskdatas.json');

export const readTasks = (req, res) => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error reading tasks', error: error.message });
    }
};
export const createTask = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newTask = new Task({ title, content });
        await newTask.save();
        res.status(201).json({ message: 'Task created successfully', task: newTask });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error: error.message });
    }
};
export const updateTasks = (req, res) => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        data[id];
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error reading tasks', error: error.message });
    }
};
export const patchTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedTask = await Task.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error: error.message });
    }
};
export const deleteTasks = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};
