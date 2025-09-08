import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { NoticeService } from "./notice.service";
import { sendResponse } from "../../utils/sendResponse";

const createNotice = catchAsync(async (req: Request, res: Response) => {
  const data = await NoticeService.createNotice(req.body);

  sendResponse(res, {
    message: "Notice created",
    statusCode: 201,
    data,
  });
});

const getAllNotices = catchAsync(async (req: Request, res: Response) => {
  const data = await NoticeService.getAllNotices();

  sendResponse(res, {
    message: "Notices retrived successfully",
    statusCode: 200,
    data,
  });
});

const getSingleNotice = catchAsync(async (req: Request, res: Response) => {
  const data = await NoticeService.getSingleNotice(req.params.id);

  sendResponse(res, {
    message: "Notice retrived successfully",
    statusCode: 200,
    data,
  });
});

export const NoticeController = {
  createNotice,
  getAllNotices,
  getSingleNotice,
};
