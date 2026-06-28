import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTasks = (search, status, priority, sort) => 
    API.get(`/tasks?search=${search}&status=${status}&priority=${priority}&sort=${sort}`);

export const getTaskById = (id) => API.get(`/tasks/${id}`);
export const createTask = (taskData) => API.post('/tasks', taskData);
export const updateTask = (id, taskData) => API.put(`/tasks/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const getStats = () => API.get('/tasks/stats');