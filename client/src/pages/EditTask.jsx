import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask } from '../services/api';
import { toast } from 'react-toastify';

const EditTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: '', description: '', priority: 'Medium', status: 'Pending', dueDate: '' });

    useEffect(() => {
        const fetchTask = async () => {
            const { data } = await getTaskById(id);
            setFormData({ ...data, dueDate: data.dueDate ? data.dueDate.split('T')[0] : '' });
        };
        fetchTask();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateTask(id, formData);
            toast.success("Task Updated!");
            navigate('/');
        } catch (err) { toast.error("Update failed"); }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow-lg">
                        <h2 className="fw-bold mb-4">Edit Task</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form-control mb-3" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
                            <textarea className="form-control mb-3" rows="4" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
                            <div className="row mb-3">
                                <div className="col-6"><select className="form-select" value={formData.priority} onChange={e => setFormData({...formData, priority: e.target.value})}><option>Low</option><option>Medium</option><option>High</option></select></div>
                                <div className="col-6"><select className="form-select" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}><option>Pending</option><option>In Progress</option><option>Completed</option></select></div>
                            </div>
                            <input type="date" className="form-control mb-4" value={formData.dueDate} onChange={e => setFormData({...formData, dueDate: e.target.value})} />
                            <div className="d-flex gap-2">
                                <button type="submit" className="btn btn-primary flex-grow-1">Update Task</button>
                                <button type="button" className="btn btn-light" onClick={() => navigate('/')}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTask;