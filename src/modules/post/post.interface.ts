export enum PostVisibility {
    teachers="teachers",
    guardians="guardians",
    students="students",
}

export interface IPost {
    heading?: string;
    text?: string;
    photo?: string;
    visibility: string[];
}