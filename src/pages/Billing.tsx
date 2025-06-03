import React from 'react';

const Billing: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Billing Information</h1>
            <div className="mt-4">
                <h2 className="text-xl">Current Plan</h2>
                <p>Your current plan details will be displayed here.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Usage</h2>
                <p>Your usage statistics will be displayed here.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl">Upgrade/Downgrade Options</h2>
                <p>Options to change your plan will be available here.</p>
            </div>
        </div>
    );
};

export default Billing;