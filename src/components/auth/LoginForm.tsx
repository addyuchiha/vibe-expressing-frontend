import React, { useState } from 'react';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Add your login logic here (e.g., API call)
        // If login fails, set the error message
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>
        </form>
    );
};

export default LoginForm;