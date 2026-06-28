import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <div className="bg-primary rounded-3 p-1 me-2 d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px'}}>
                        <i className="bi bi-check2-square text-white fs-5"></i>
                    </div>
                    TaskFlow
                </Link>
                <div className="ms-auto d-flex align-items-center gap-3">
                    <button className="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                        <i className="bi bi-plus-circle-fill me-2"></i>New Task
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;