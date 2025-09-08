import { IPost } from "./post.interface";
import { Post } from "./post.model";

const createPost = async (data: IPost) => {
  return Post.create(data);
};

export const PostServices = {
  createPost,
};
