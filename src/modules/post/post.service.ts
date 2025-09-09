import { IPost } from "./post.interface";
import { Post } from "./post.model";

const createPost = async (data: IPost) => {
  return Post.create(data);
};

const getNewsFeed = async() => {
  const posts = await Post.find().sort("-createAt");
  return posts;
}

export const PostServices = {
  createPost,
  getNewsFeed
};
