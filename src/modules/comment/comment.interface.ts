import { Types } from "mongoose";

export interface IComment {
    postId: Types.ObjectId;
    parentComment: Types.ObjectId | null;
    depth: number;
    photo?: string;
    text?: string;
    isDeleted: boolean;
}