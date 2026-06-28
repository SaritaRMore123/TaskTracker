const Task = require('../models/Task');

// Get all tasks with search, filter, and sort
exports.getTasks = async (req, res) => {
    try {
        const { search, status, priority, sort } = req.query;
        let query = {};

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }
        if (status) query.status = status;
        if (priority) query.priority = priority;

        let tasks = await Task.find(query).sort(sort === 'oldest' ? { createdAt: 1 } : { createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// CREATE Task
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET Stats for Dashboard
exports.getStats = async (req, res) => {
    try {
        const total = await Task.countDocuments();
        const completed = await Task.countDocuments({ status: 'Completed' });
        const pending = await Task.countDocuments({ status: 'Pending' });
        const progress = await Task.countDocuments({ status: 'In Progress' });
        res.json({ total, completed, pending, progress });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE Task
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE Task
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET Single Task
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.status(404).json({ message: "Task not found" });
    }
};
