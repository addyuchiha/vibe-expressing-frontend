import React from 'react';
import LiveSession from '../components/dashboard/LiveSession';
import Timeline from '../components/dashboard/Timeline';
import CringeScoreMeter from '../components/dashboard/CringeScoreMeter';
import MonetizationStats from '../components/dashboard/MonetizationStats';

const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <LiveSession />
            <CringeScoreMeter />
            <Timeline />
            <MonetizationStats />
        </div>
    );
};

export default Dashboard;