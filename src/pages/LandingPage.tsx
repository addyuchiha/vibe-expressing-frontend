import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-4xl font-bold mb-4">Turn your ‘uhhh’ into revenue.</h1>
                <p className="mb-8">Capture the vibes and monetize those awkward moments during calls.</p>
                <Button label="Start Capturing Vibes" onClick={() => {/* Add your click handler here */}} />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;