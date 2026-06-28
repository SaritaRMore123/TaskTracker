import React from 'react';

const Filter = ({ search, setSearch, filterStatus, setFilterStatus, filterPriority, setFilterPriority, sort, setSort }) => {
    return (
        <div className="search-container shadow-sm mb-5">
            <div className="row g-3">
                <div className="col-lg-4">
                    <div className="input-group">
                        <span className="input-group-text bg-transparent border-end-0">
                            <i className="bi bi-search text-muted"></i>
                        </span>
                        <input 
                            type="text" 
                            className="form-control border-start-0" 
                            placeholder="Search tasks..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6 col-lg-2">
                    <select className="form-select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value="">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-2">
                    <select className="form-select" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                        <option value="">All Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-2">
                    <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="priority">By Priority</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-2">
                    <button 
                        className="btn btn-light w-100 fw-semibold" 
                        onClick={() => {
                            setSearch('');
                            setFilterStatus('');
                            setFilterPriority('');
                            setSort('newest');
                        }}
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Filter;
