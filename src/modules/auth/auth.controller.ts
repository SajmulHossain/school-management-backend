import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const register = catchAsync(async(req:Request, res: Response) => {
    const data = await AuthService.register(req.body);

    sendResponse(res, {
        message: 'Registration Successful',
        data,statusCode:201
    })
})

export const AuthController = {
    register
}