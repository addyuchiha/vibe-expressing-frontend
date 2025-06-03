import React from 'react';

const MonetizationStats: React.FC<{ earnings: number; cringeCount: number }> = ({ earnings, cringeCount }) => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">Monetization Stats</h2>
            <p className="text-gray-700">Total Earnings: ${earnings.toFixed(2)}</p>
            <p className="text-gray-700">Total Cringe Moments: {cringeCount}</p>
        </div>
    );
};

export default MonetizationStats;