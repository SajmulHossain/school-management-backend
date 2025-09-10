import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { PostServices } from "./post.service";
import { sendResponse } from "../../utils/sendResponse";

const createPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.user;
  const data = await PostServices.createPost({...req.body, author: id});

  sendResponse(res, {
    statusCode: 201,
    message: "Post created successfully",
    data,
  });
});

const getNewsFeed = catchAsync(async (req: Request, res: Response) => {
  const data = await PostServices.getNewsFeed();

  sendResponse(res, {
    statusCode: 200,
    message: "Feed retrived successfully",
    data,
  });
});

const deletePostByUser = catchAsync(async(req: Request, res: Response) => {
  const data = await PostServices.deletePostByUser(req.user.id, req.params.id);

  sendResponse(res, {
    statusCode: 200,
    message: "Post deleted",
    data
  })
})

const getDeletedPosts = catchAsync(async (req: Request, res: Response) => {
  const data = await PostServices.getDeletedPosts();

  sendResponse(res, {
    statusCode: 200,
    message: "Deleted posts retrived",
    data,
  });
});

const updatePost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await PostServices.updatePost(id, req.body);

  sendResponse(res, {
    statusCode: 201,
    message: "Post updated successfully",
    data,
  });
});

export const PostController = {
  createPost,
  getNewsFeed,
  deletePostByUser,
  getDeletedPosts,
  updatePost
};
