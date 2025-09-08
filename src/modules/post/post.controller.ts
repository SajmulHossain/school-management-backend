import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { PostServices } from "./post.service";
import { sendResponse } from "../../utils/sendResponse";

const createPost = catchAsync(async (req: Request, res: Response) => {
  const data = await PostServices.createPost(req.body);

  sendResponse(res, {
    statusCode: 201,
    message: "Post created successfully",
    data,
  });
});

export const PostController = {
  createPost,
};
