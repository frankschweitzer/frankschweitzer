import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Header.css';

const Header = () => {
    return (
        <header className="bg-dark text-white p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="h3">Frank J Schweitzer</h1>
                    <nav>
                        <a href="#/" className="text-white mx-2">Home</a>
                        <a href="#/projects" className="text-white mx-2">Projects</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;