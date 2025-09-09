import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { PostServices } from "./post.service";
import { sendResponse } from "../../utils/sendResponse";

const createPost = catchAsync(async (req: Request, res: Response) => {
  // const { id } = req.user;
  const data = await PostServices.createPost(req.body);

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

export const PostController = {
  createPost,
  getNewsFeed
};
