import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Vibe Express</h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
                    <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;