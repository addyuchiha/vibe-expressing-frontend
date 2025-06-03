import React from 'react';

interface CringeScoreMeterProps {
    score: number;
}

const CringeScoreMeter: React.FC<CringeScoreMeterProps> = ({ score }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold">Cringe Score</h2>
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                    className="bg-red-500 h-4 rounded-full"
                    style={{ width: `${score}%` }}
                />
            </div>
            <span className="mt-2 text-lg">{score}/100</span>
        </div>
    );
};

export default CringeScoreMeter;