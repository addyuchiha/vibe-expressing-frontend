import React, { useState } from 'react';
import SignupForm from '../components/auth/SignupForm';

const Signup: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (formData: any) => {
        try {
            // Call the signup API with formData
            // If successful, redirect to the dashboard or login page
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Create an Account</h1>
            {error && <p className="text-red-500">{error}</p>}
            <SignupForm onSignup={handleSignup} />
        </div>
    );
};

export default Signup;