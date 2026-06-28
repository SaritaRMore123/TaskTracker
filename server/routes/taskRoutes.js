const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// 1. Get all tasks (includes Search, Filter, and Sort logic)
router.get('/', taskController.getTasks);

// 2. Get Dashboard Statistics (Total, Pending, Completed, In Progress)
// NOTE: This MUST stay above the /:id route to work properly
router.get('/stats', taskController.getStats);

// 3. Create a new Task
router.post('/', taskController.createTask);

// 4. Get a single Task details by ID
router.get('/:id', taskController.getTaskById);

// 5. Update an existing Task by ID
router.put('/:id', taskController.updateTask);

// 6. Delete a Task by ID
router.delete('/:id', taskController.deleteTask);

module.exports = router;
