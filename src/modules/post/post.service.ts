import { AppError } from "../../utils/AppError";
import { IPost } from "./post.interface";
import { Post } from "./post.model";

const createPost = async (data: IPost) => {
  return Post.create(data);
};

const getNewsFeed = async () => {
  const posts = await Post.find().sort("-createAt");
  return posts;
};

const deletePostByUser = async (postId: string, userId: string) => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new AppError(404, "Post not found");
  }

  const isValid = await Post.findOne({ author: userId });

  if (!isValid) {
    throw new AppError(403, "You cannot delete this post");
  }

  await Post.findByIdAndDelete(postId);
};

export const PostServices = {
  createPost,
  getNewsFeed,
  deletePostByUser,
};
