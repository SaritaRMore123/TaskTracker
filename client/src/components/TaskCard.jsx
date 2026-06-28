import React from 'react';
import { Link } from 'react-router-dom';

const TaskCard = ({ task, onDelete }) => {
    return (
        <div className="card task-card h-100 p-2">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`badge-custom priority-${task.priority.toLowerCase()}`}>
                        <i className="bi bi-circle-fill me-1 small"></i> {task.priority}
                    </span>
                    <span className={`badge-custom status-${task.status.toLowerCase().replace(' ', '-')}`}>
                        {task.status}
                    </span>
                </div>
                
                <h5 className="fw-800 mb-2 text-dark">{task.title}</h5>
                <p className="text-muted small mb-4" style={{minHeight: '40px'}}>
                    {task.description || "No description provided."}
                </p>
                
                <div className="d-flex align-items-center mb-4 text-secondary small fw-bold">
                    <i className="bi bi-calendar3 me-2 text-primary"></i>
                    {task.dueDate ? new Date(task.dueDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : 'No Deadline'}
                </div>

                <div className="d-flex align-items-center gap-2 mt-auto">
                    <Link to={`/edit/${task._id}`} className="btn-edit flex-grow-1 text-center text-decoration-none">
                        <i className="bi bi-pencil-square me-2"></i>Edit Task
                    </Link>
                    <button onClick={() => onDelete(task._id)} className="btn-delete-icon" title="Delete Task">
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;