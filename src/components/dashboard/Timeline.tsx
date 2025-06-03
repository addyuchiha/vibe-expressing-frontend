import React from 'react';

const Timeline: React.FC = () => {
    return (
        <div className="timeline">
            <h2 className="text-xl font-bold">Timeline of Events</h2>
            {/* Placeholder for timeline events */}
            <ul className="list-disc pl-5">
                {/* Example event item */}
                <li className="my-2">Event 1: Description of the event</li>
                <li className="my-2">Event 2: Description of the event</li>
                <li className="my-2">Event 3: Description of the event</li>
            </ul>
        </div>
    );
};

export default Timeline;