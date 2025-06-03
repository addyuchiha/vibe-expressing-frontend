// src/types/index.ts

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}

export interface Event {
    id: string;
    type: 'cringe' | 'silence';
    timestamp: Date;
    duration: number; // in seconds
}

export interface MonetizationStats {
    totalEarnings: number;
    currentPlan: string;
    usage: number; // in hours
}

export interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (username: string, email: string, password: string) => Promise<void>;
}