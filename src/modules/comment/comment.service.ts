import { AppError } from "../../utils/AppError";
import { Post } from "../post/post.model";
import { IComment } from "./comment.interface";
import { Comment } from "./comment.model";

const postComment = async (data: IComment) => {
  return await Comment.create(data);
};

const getCommentForPosts = async (id: string) => {
  const post = await Post.findById(id);

  if (!post) {
    throw new AppError(404, "Post not found");
  }

  return await Comment.find({ postId: id });
};

const getReplies = async (id: string) => {
  const comment = await Comment.findById(id);

  if (!comment) {
    throw new AppError(404, "Comment not found");
  }

  return await Comment.find({ parentComment: id });
};

export const CommentService = {
  postComment,
  getCommentForPosts,
  getReplies
};
