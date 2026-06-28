import axios from 'axios';

// IMPORTANT: Do NOT use localhost here if you are deploying!
const API_URL = import.meta.env.VITE_API_URL || 'https://taskflow-backend-7kpx.onrender.com';

const API = axios.create({ baseURL: API_URL });

export const getTasks = (search = '', status = '', priority = '', sort = 'newest') => 
    API.get(`/tasks?search=${search}&status=${status}&priority=${priority}&sort=${sort}`);

export const getTaskById = (id) => API.get(`/tasks/${id}`);
export const createTask = (taskData) => API.post('/tasks', taskData);
export const updateTask = (id, taskData) => API.put(`/tasks/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
export const getStats = () => API.get('/tasks/stats');

export default API;
