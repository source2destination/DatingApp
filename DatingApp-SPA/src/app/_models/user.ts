import { Photo } from "./Photo";

export interface User {
    id: number;
    username: string;
    knownAs: string;
    gender: string;
    age: number;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
