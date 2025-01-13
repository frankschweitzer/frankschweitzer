import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <p className="mb-0">© 2025 Frank Schweitzer. All rights reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://github.com/frankschweitzer" className="text-white">GitHub</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/frank-schweitzer-4953b4220/" className="text-white">LinkedIn</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="mailto:fjschweitzer27@gmail.com" className="text-white">Email</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;