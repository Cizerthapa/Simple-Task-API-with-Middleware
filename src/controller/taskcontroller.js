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
export const createTasks = (req, res) => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error reading tasks', error: error.message });
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
export const patchTasks = (req, res) => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error reading tasks', error: error.message });
    }
};
export const deleteTasks = (req, res) => {
    try {
        const data = fs.readFileSync(tasksFilePath, 'utf-8');
        const tasks = JSON.parse(data);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error reading tasks', error: error.message });
    }
};