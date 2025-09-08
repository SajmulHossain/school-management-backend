import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { NoticeService } from "./notice.service";
import { sendResponse } from "../../utils/sendResponse";

const createNotice = catchAsync(async(req:Request, res: Response) => {
    const data = await NoticeService.createNotice(req.body);

    sendResponse(res, {
        message: "Notice created",
        statusCode: 201,
        data,
    })
})

export const NoticeController = {
    createNotice
}