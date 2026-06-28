import React, { useState } from 'react';
import { createTask } from '../services/api';
import { toast } from 'react-toastify';

const TaskForm = ({ onTaskSaved }) => {
    const [formData, setFormData] = useState({ title: '', description: '', priority: 'Medium', status: 'Pending', dueDate: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createTask(formData);
            toast.success("Task Created!");
            onTaskSaved();
            setFormData({ title: '', description: '', priority: 'Medium', status: 'Pending', dueDate: '' });
            document.querySelector('[data-bs-dismiss="modal"]').click();
        } catch (err) { toast.error("Error creating task"); }
    };

    return (
        <div className="modal fade" id="addTaskModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <form className="modal-content p-3" onSubmit={handleSubmit}>
                    <div className="modal-header border-0">
                        <h5 className="fw-bold">Create New Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className="form-control mb-3" placeholder="Title" required onChange={e => setFormData({...formData, title: e.target.value})} value={formData.title} />
                        <textarea className="form-control mb-3" placeholder="Description" rows="3" onChange={e => setFormData({...formData, description: e.target.value})} value={formData.description}></textarea>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <select className="form-select" onChange={e => setFormData({...formData, priority: e.target.value})} value={formData.priority}>
                                    <option>Low</option><option>Medium</option><option>High</option>
                                </select>
                            </div>
                            <div className="col-6 mb-3">
                                <input type="date" className="form-control" onChange={e => setFormData({...formData, dueDate: e.target.value})} value={formData.dueDate} />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="submit" className="btn btn-primary w-100">Save Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;