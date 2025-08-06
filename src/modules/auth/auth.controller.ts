import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import { User } from "../user/user.model";
import { AppError } from "../../utils/AppError";
import { compare } from "bcryptjs";

const register = catchAsync(async(req:Request, res: Response) => {
    const data = await AuthService.register(req.body);

    sendResponse(res, {
        message: 'Registration Successful',
        data,statusCode:201
    })
})

const login = catchAsync(async(req: Request, res: Response) => {
    const { email, password, phone } = req.body;

    const auth = email || phone;
    
    const isUserExist = await User.isUserExist(auth);
    
    if(!isUserExist) {
        throw new AppError(404, 'No account found. Create a new account');
    }

    const isPasswordMatched = await compare(password, isUserExist.password as string);

    if(!isPasswordMatched) {
        throw new AppError(401, 'Invalid credentials');
    }

   isUserExist.password = undefined;

    sendResponse(res, {
        message: 'Log in successfull',
        statusCode: 200,
        data: isUserExist
    })
})

export const AuthController = {
    register,
    login
}