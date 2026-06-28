const express = require('express');
const router = express.Router();
const { 
    getTasks, 
    getStats, 
    createTask, 
    getTaskById, 
    updateTask, 
    deleteTask 
} = require('../controllers/taskController');

/**
 * @route   GET /api/tasks
 * @desc    Get all tasks (with Search, Filter, and Sort)
 */
router.get('/', getTasks);

/**
 * @route   GET /api/tasks/stats
 * @desc    Get counts for Dashboard Statistics
 * @note    Must be placed BEFORE /:id route
 */
router.get('/stats', getStats);

/**
 * @route   POST /api/tasks
 * @desc    Create a new task
 */
router.post('/', createTask);

/**
 * @route   GET /api/tasks/:id
 * @desc    Get a single task by ID
 */
router.get('/:id', getTaskById);

/**
 * @route   PUT /api/tasks/:id
 * @desc    Update an existing task
 */
router.put('/:id', updateTask);

/**
 * @route   DELETE /api/tasks/:id
 * @desc    Delete a task
 */
router.delete('/:id', deleteTask);

module.exports = router;
