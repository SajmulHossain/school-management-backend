import { IComment } from "./comment.interface";
import { Comment } from "./comment.model";

const postComment = async(data: IComment) => {
    return await Comment.create(data);
}

export const CommentService = {
    postComment
}