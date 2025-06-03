import React from 'react';

interface EventCardProps {
    title: string;
    description: string;
    cringeScore: number;
    timestamp: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, description, cringeScore, timestamp }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{timestamp}</span>
                <span className="text-sm font-bold text-green-500">Cringe Score: {cringeScore}</span>
            </div>
        </div>
    );
};

export default EventCard;