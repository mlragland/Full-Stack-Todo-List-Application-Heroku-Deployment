const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  

const app = express();  
app.use(cors());  

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a task schema
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

// Create a task model
const Task = mongoose.model('Task', taskSchema);

// Parse JSON requests
app.use(express.json());

// Create a new task
app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = new Task({ task });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

// define  a root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
