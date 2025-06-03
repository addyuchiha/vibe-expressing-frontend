import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login to Vibe Express</h1>
            <LoginForm />
        </div>
    );
};

export default Login;