import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CommentService } from "./comment.service";
import { sendResponse } from "../../utils/sendResponse";

const postComment = catchAsync(async (req: Request, res: Response) => {
  const data = await CommentService.postComment(req.body);

  sendResponse(res, {
    message: "Comment Successfull",
    statusCode: 201,
    data,
  });
});

const getCommentForPosts = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;
  const data = await CommentService.getCommentForPosts(id);

  sendResponse(res, {
    message: "Comment retrive Successfull",
    statusCode: 200,
    data,
  });
});

export const CommentController = {
    postComment,
    getCommentForPosts
}