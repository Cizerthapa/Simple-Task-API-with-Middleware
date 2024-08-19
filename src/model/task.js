import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    Title: String,
    content: String
});

const Task = mongoose.model('Task', taskSchema);

export default Task; // Make sure to export as default                     