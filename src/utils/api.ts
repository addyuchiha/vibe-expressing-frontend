export const fetchCringeData = async (sessionId) => {
    const response = await fetch(`/api/sessions/${sessionId}/cringe-data`);
    if (!response.ok) {
        throw new Error('Failed to fetch cringe data');
    }
    return response.json();
};

export const submitFeedback = async (sessionId, feedback) => {
    const response = await fetch(`/api/sessions/${sessionId}/feedback`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
    });
    if (!response.ok) {
        throw new Error('Failed to submit feedback');
    }
    return response.json();
};

export const getUserStats = async (userId) => {
    const response = await fetch(`/api/users/${userId}/stats`);
    if (!response.ok) {
        throw new Error('Failed to fetch user stats');
    }
    return response.json();
};