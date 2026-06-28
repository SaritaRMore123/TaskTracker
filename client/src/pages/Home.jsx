import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../services/api';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import { toast } from 'react-toastify';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [priority, setPriority] = useState('');
    const [sort, setSort] = useState('newest');
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);
        try {
            const { data } = await getTasks(search, status, priority, sort);
            setTasks(data);
        } catch (err) {
            toast.error("Error connecting to server");
        }
        setLoading(false);
    };

    useEffect(() => {
        const delaySearch = setTimeout(() => loadData(), 300);
        return () => clearTimeout(delaySearch);
    }, [search, status, priority, sort]);

    // Dynamic Stats Calculation
    const stats = {
        total: tasks.length,
        pending: tasks.filter(t => t.status === 'Pending').length,
        progress: tasks.filter(t => t.status === 'In Progress').length,
        completed: tasks.filter(t => t.status === 'Completed').length
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                await deleteTask(id);
                toast.success("Task deleted successfully");
                loadData();
            } catch (err) {
                toast.error("Failed to delete");
            }
        }
    };

    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="row mb-5 align-items-center">
                <div className="col-md-8">
                    <h4 className="text-secondary fw-600 mb-1">Welcome Back!</h4>
                    <h1 className="display-5 fw-800 mb-0">My <span style={{color: 'var(--primary)'}}>Workspace</span></h1>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <div className="text-muted small">
                        <i className="bi bi-calendar-check me-2"></i>
                        {new Date().toDateString()}
                    </div>
                </div>
            </div>

            {/* Premium Stat Cards */}
            <div className="row g-4 mb-5">
                {[
                    { title: 'Total Tasks', value: stats.total, icon: 'bi-grid-1x2', color: '#6366f1', bg: '#e0e7ff' },
                    { title: 'Pending', value: stats.pending, icon: 'bi-clock-history', color: '#64748b', bg: '#f1f5f9' },
                    { title: 'In Progress', value: stats.progress, icon: 'bi-play-circle', color: '#a855f7', bg: '#f3e8ff' },
                    { title: 'Done', value: stats.completed, icon: 'bi-check-all', color: '#10b981', bg: '#dcfce7' }
                ].map((s, i) => (
                    <div className="col-md-3" key={i}>
                        <div className="card stat-card p-4 h-100">
                            <div className="stat-icon-wrapper" style={{background: s.bg, color: s.color}}>
                                <i className={`bi ${s.icon}`}></i>
                            </div>
                            <h6 className="text-muted fw-bold mb-1">{s.title}</h6>
                            <h2 className="fw-800 mb-0">{s.value}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter Section */}
            <div className="search-wrapper mb-5">
                <div className="row g-3">
                    <div className="col-lg-4">
                        <div className="input-group">
                            <span className="input-group-text bg-light border-0"><i className="bi bi-search"></i></span>
                            <input type="text" className="form-control bg-light border-0" placeholder="Search by title or description..." onChange={e => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select border-0 bg-light" onChange={e => setStatus(e.target.value)}>
                            <option value="">Status: All</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select className="form-select border-0 bg-light" onChange={e => setPriority(e.target.value)}>
                            <option value="">Priority: All</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <select className="form-select border-0 bg-light" onChange={e => setSort(e.target.value)}>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Task Grid */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-grow text-primary" role="status"></div>
                </div>
            ) : (
                <div className="row g-4">
                    {tasks.length > 0 ? (
                        tasks.map(t => (
                            <div className="col-md-6 col-lg-4" key={t._id}>
                                <TaskCard task={t} onDelete={handleDelete} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg" style={{maxWidth: '200px'}} alt="Empty" className="mb-4 opacity-50" />
                            <h4 className="fw-bold text-muted">No tasks found</h4>
                            <p className="text-muted">Try adjusting your filters or add a new task.</p>
                        </div>
                    )}
                </div>
            )}

            <TaskForm onTaskSaved={loadData} />
        </div>
    );
};

export default Home;